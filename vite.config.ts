import { defineConfig } from 'vite'
import * as path from 'path' // Changed to * as path for better Vercel compatibility
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
      // FIX: This maps Figma's AI paths to your actual GitHub assets folder
      'figma:asset': path.resolve(__dirname, './src/assets'),
    },
  },

  // File types to support raw imports.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
