import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  vite: {
    define: {
      'import.meta.env.SUPABASE_URL': JSON.stringify(process.env.SUPABASE_URL),
      'import.meta.env.SUPABASE_ANON_KEY': JSON.stringify(process.env.SUPABASE_ANON_KEY),
    },
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
