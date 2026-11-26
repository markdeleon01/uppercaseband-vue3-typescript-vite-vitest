import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    proxy: {
        '/api': {
            target: 'http://localhost:3000', // Your backend URL
            changeOrigin: true,
            // Uncomment the line below if your backend routes don't start with /api
            rewrite: (path) => path.replace(/^\/api/, '')
        }
    }
},
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
