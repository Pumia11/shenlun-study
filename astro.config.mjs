import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'pdfjs': ['pdfjs-dist'],
            'mammoth': ['mammoth'],
            'supabase': ['@supabase/supabase-js']
          }
        }
      }
    }
  }
});
