import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  input: {
    index: 'src/index.js',
    education: 'src/education.js',
    experience: 'src/experience.js',
    media: 'src/media.js',
    projects: 'src/projects.js'
  },
  output: {
    entryFileNames: '[name].js'
  }
})
