import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const configuredHost = process.env.HASHNODE_PUBLICATION_HOST;

if (!configuredHost) {
  console.log('Hashnode import skipped: HASHNODE_PUBLICATION_HOST is not configured.');
  process.exit(0);
}

const host = configuredHost.replace(/^https?:\/\//, '').replace(/\/$/, '');
const publicationUrl = `https://${host}`;
const outputDir = path.resolve('src/content/blog/hashnode');

const decodeXml = value => value.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"');
const safeSlug = value => value.replace(/[^a-z0-9-]/gi, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
const titleFromSlug = slug => slug.replace(/[-_]+/g, ' ').replace(/\b\w/g, char => char.toUpperCase());
const markdownTitle = markdown => markdown.match(/^#\s+(.+)$/m)?.[1]?.trim();
const markdownDescription = markdown => markdown.split('\n').map(line => line.trim()).find(line => line && !line.startsWith('#') && !line.startsWith('!') && !line.startsWith('```'))?.slice(0, 220);

async function fetchText(url, accept = 'text/plain, text/markdown, text/html;q=0.9, */*;q=0.8') {
  const response = await fetch(url, { headers: { Accept: accept, 'User-Agent': 'DevOpsWorlwide one-time content migration' } });
  if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
  return await response.text();
}

async function getArticleMetadata(url, fallbackSlug, markdown) {
  try {
    const html = await fetchText(url, 'text/html');
    const title = html.match(/<meta property="og:title" content="([^"]+)"/i)?.[1];
    const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1];
    const date = html.match(/<meta property="article:published_time" content="([^"]+)"/i)?.[1];
    return { title: title || markdownTitle(markdown) || titleFromSlug(fallbackSlug), description: description || markdownDescription(markdown) || `Originally published on ${host}.`, date: date || new Date().toISOString() };
  } catch {
    return { title: markdownTitle(markdown) || titleFromSlug(fallbackSlug), description: markdownDescription(markdown) || `Originally published on ${host}.`, date: new Date().toISOString() };
  }
}

try {
  const sitemap = await fetchText(`${publicationUrl}/sitemap.xml`, 'application/xml, text/xml, */*;q=0.8');
  const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(match => decodeXml(match[1])).filter(url => {
    const pathname = new URL(url).pathname;
    return url.startsWith(publicationUrl) && pathname !== '/' && !/\/(rss|sitemap|archive|members)(\.xml)?\/?$/i.test(pathname);
  });
  await mkdir(outputDir, { recursive: true });

  let imported = 0;
  for (const articleUrl of urls) {
    const slug = safeSlug(new URL(articleUrl).pathname.split('/').filter(Boolean).pop() || 'hashnode-article');
    if (!slug) continue;
    try {
      const markdown = (await fetchText(`${articleUrl}.md`)).trim();
      if (!markdown || markdown.startsWith('<!DOCTYPE')) throw new Error('The public Markdown source was unavailable.');
      const metadata = await getArticleMetadata(articleUrl, slug, markdown);
      const readingTime = Math.max(4, Math.ceil(markdown.split(/\s+/).length / 220));
      const content = ['---', `title: ${JSON.stringify(metadata.title)}`, `description: ${JSON.stringify(metadata.description)}`, `date: ${JSON.stringify(metadata.date)}`, 'author: DevOpsWorlwide Editorial', 'tags: [Hashnode]', 'category: Hashnode Archive', 'featured: false', `readingTime: ${readingTime}`, '---', '', markdown, ''].join('\n');
      await writeFile(path.join(outputDir, `${slug}.md`), content, 'utf8');
      imported += 1;
    } catch (error) {
      console.warn(`Skipped ${articleUrl}: ${error.message}`);
    }
  }
  console.log(`Imported ${imported} public Hashnode article(s) from ${host}.`);
} catch (error) {
  console.warn(`Hashnode import skipped: ${error.message}`);
}
