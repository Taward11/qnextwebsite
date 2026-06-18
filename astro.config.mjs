import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://fileflex.com',
  integrations: [sitemap()],
  build: {
    // Inline all page CSS into the HTML so there are no render-blocking
    // stylesheet requests on first load. This collapses the critical request
    // chain (HTML → CSS → CSS) down to just the HTML document — important for
    // LCP on high-latency mobile. Trade-off: CSS is no longer cached as a
    // shared file across pages, which is an acceptable cost for a marketing /
    // SEO landing site where most sessions are a single page from search/ads.
    inlineStylesheets: 'always',
  },
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
