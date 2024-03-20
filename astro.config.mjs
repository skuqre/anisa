import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://skuqre.github.io',
  base: '/anisa',
  vite: {
    server: {
      fs: {
        strict: false
      }
    }
  },
  integrations: [mdx()]
});