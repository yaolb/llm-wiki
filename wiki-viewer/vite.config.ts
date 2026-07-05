import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.md'],
  server: {
    port: 5173,
    open: true,
    fs: {
      allow: ['..'], // Allow serving files from parent directory (wiki/ content)
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
