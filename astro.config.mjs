import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import tailwindcss from '@tailwindcss/vite';

import expressiveCode from 'astro-expressive-code';

export default defineConfig({
  adapter: netlify(),
  integrations: [expressiveCode()],
  srcDir: 'src',
  vite: {
    plugins: [tailwindcss()]
  },
  server: {
    port: 4321
  }
});
