import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  base: '/frontend-mentor-coffeeroasters-sub/',

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  css: {
    preprocessorOptions: {
      scss: {
        // main imports all other scss files
        additionalData: `
          @import "@/assets/style/main.scss";
        `,
      },
    },
  },
});
