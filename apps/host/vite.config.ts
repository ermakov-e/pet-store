import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'host',
      filename: 'remoteEntry.js',
      
      // Удалённые модули (Remote)
      remotes: {
        mfCatalog: 'http://localhost:4173/remoteEntry.js',
      },
      
      // Общие зависимости (Shared)
      shared: ['vue', 'vue-router', 'pinia']
    })
  ],
  
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    }
  },
  
  build: {
    target: 'esnext',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      }
    }
  },
  
  server: {
    port: 4170,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  }
})
