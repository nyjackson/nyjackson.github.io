import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Using './' ensures paths work on any GitHub Pages URL
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})