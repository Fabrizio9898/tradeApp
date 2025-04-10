// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite:{
    server: {
      proxy:{
        '/api': {
          target: 'http://localhost:8080',
          changeOrigin: true,
        }
      }
  }
}})