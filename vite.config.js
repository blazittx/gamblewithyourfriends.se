import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/gameAnalytics': {
        target: 'https://api.diabolical.studio',
        changeOrigin: true,
        secure: true,
        rewrite: () => '/rest-api/gameAnalytics'
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})


