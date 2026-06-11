import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fileflex.com',
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
