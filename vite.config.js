import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

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
        // main.scss imports all other scss files
        additionalData: `
          @import "@/assets/style/main.scss";
        `,
      },
    },
  },
});
