import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';

const endpoint = 'https://gql.hashnode.com';
const host = process.env.HASHNODE_PUBLICATION_HOST;
const token = process.env.HASHNODE_TOKEN;

if (!host) {
  console.log('Hashnode sync skipped: HASHNODE_PUBLICATION_HOST is not configured.');
  process.exit(0);
}

const query = `
  query PublicationPosts($host: String!, $after: String) {
    publication(host: $host) {
      posts(first: 50, after: $after) {
        pageInfo { hasNextPage endCursor }
        edges {
          node {
            id
            slug
            title
            brief
            url
            publishedAt
            content { markdown }
          }
        }
      }
    }
  }
`;

async function request(after = null) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {})
    },
    body: JSON.stringify({ query, variables: { host, after } })
  });
  const payload = await response.json();
  if (!response.ok || payload.errors) {
    throw new Error(payload.errors?.map(error => error.message).join('; ') || `Hashnode returned HTTP ${response.status}`);
  }
  if (!payload.data?.publication) throw new Error(`No Hashnode publication found for ${host}.`);
  return payload.data.publication.posts;
}

const posts = [];
let after = null;
do {
  const connection = await request(after);
  posts.push(...connection.edges.map(edge => edge.node));
  after = connection.pageInfo.hasNextPage ? connection.pageInfo.endCursor : null;
} while (after);

const outputDir = path.resolve('src/content/blog/hashnode');
await mkdir(outputDir, { recursive: true });

for (const post of posts) {
  if (!post.slug || !post.content?.markdown) continue;
  const description = post.brief || `Originally published on Hashnode: ${post.url}`;
  const readingTime = Math.max(4, Math.ceil(post.content.markdown.trim().split(/\s+/).length / 220));
  const frontmatter = [
    '---',
    `title: ${JSON.stringify(post.title)}`,
    `description: ${JSON.stringify(description)}`,
    `date: ${JSON.stringify(post.publishedAt)}`,
    'author: DevOpsWorlwide Editorial',
    'tags: [Hashnode]',
    'category: Hashnode Archive',
    'featured: false',
    `readingTime: ${readingTime}`,
    '---',
    '',
    post.content.markdown.trim(),
    ''
  ].join('\n');
  await writeFile(path.join(outputDir, `${post.slug}.md`), frontmatter, 'utf8');
}

console.log(`Synced ${posts.length} Hashnode article(s) from ${host}.`);
