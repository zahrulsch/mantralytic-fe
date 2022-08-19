import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    port: 5000
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import 'src/sass/responsive.scss';`
      }
    }
  }
})
