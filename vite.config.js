
import react from '@vitejs/plugin-react'

const { resolve } = require('path')
const { defineConfig, searchForWorkspaceRoot } = require('vite')

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html')
      }
    }
  },
  server: {
    fs: {
      allow: [
        searchForWorkspaceRoot(process.cwd()),
        "./src/index.html"
      ]
    }
  },
  plugins: [react()]
})

// https://vitejs.dev/config/

