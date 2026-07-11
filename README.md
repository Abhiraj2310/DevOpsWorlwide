# DevOpsWorlWide

A static, dark-first DevOps news and knowledge platform built with Astro, TypeScript, Tailwind CSS, Markdown content collections, RSS, and sitemap support.

## Local development

```bash
npm install
npm run dev
npm run build
```

The production build is fully static in `dist/`; no Node server is required after build.

## Publishing an article

Add a Markdown file to `src/content/blog/`. Required frontmatter:

```yaml
title: Your title
description: Search-friendly summary
date: 2026-07-11
author: Your Name
tags: [Kubernetes, SRE]
category: Kubernetes
featured: false
readingTime: 8
```

Use normal Markdown headings, tables, blockquotes, and fenced code blocks. Drafts use `draft: true` and are excluded from generated pages.

## GitHub Pages

1. Update `site` and `base` in `astro.config.mjs` with your GitHub user/repository.
2. In GitHub Settings → Pages, select **GitHub Actions** as the source.
3. Push to `main`; `.github/workflows/deploy.yml` builds and deploys the static site.

For a custom domain, rename `public/CNAME.example` to `public/CNAME`, replace its value with your domain, and update `site` plus the sitemap URL in `public/robots.txt`.

## Architecture

- `src/content/blog` — Markdown CMS
- `src/components` — reusable interface pieces
- `src/layouts` — global SEO-aware shell
- `src/pages` — static routes, RSS and 404
- `.github/workflows` — Pages deployment

The content model is ready for multiple authors, analytics, Giscus, Algolia, PWA support, and image-CDN enhancement.
