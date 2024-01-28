import { defineConfig } from 'astro/config';

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
    }
});
