import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://abhiraj2310.github.io',
  base: process.env.GITHUB_ACTIONS ? '/DevOpsWorlwide/' : '',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  output: 'static'
});
