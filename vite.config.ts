import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // For GitHub Pages, use '/' for custom domain or '/Muneeb-ii.github.io/' for username.github.io
  // If deploying to username.github.io, change base to '/Muneeb-ii.github.io/'
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
