import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import dynamicImportVariables from 'rollup-plugin-dynamic-import-variables'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
  },
  build: {
    rollupOptions: {
      plugins: [dynamicImportVariables()],
    },
  },
})
