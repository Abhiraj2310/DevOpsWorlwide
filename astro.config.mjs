import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // The published site uses a custom domain, which is served from the domain root.
  // Keeping a repository-name base here would make built assets load from
  // /DevOpsWorldwide/_astro/... and leave the custom-domain site unstyled.
  site: 'https://devopsworldwide.com',
  base: '',
  integrations: [tailwind({ applyBaseStyles: false }), sitemap()],
  output: 'static'
});
