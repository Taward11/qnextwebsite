import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://qnextwebsite.pages.dev',
  integrations: [sitemap()],
  server: {
    host: '0.0.0.0',
    port: 5000,
  },
  vite: {
    server: {
      allowedHosts: true,
    },
  },
});
