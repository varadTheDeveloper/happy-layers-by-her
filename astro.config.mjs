// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Temporary address on Varad's domain. Change to Sneha's own domain when she buys one.
export default defineConfig({
  site: 'https://happylayers.opentestudox.org',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
