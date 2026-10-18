import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://knotcollective.github.io',
  base: '/ETTOREBIAGI',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
