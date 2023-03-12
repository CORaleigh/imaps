import { defineConfig } from "vite";

const config = {
  base: '/imaps/',
  build: {
    chunkSizeWarningLimit: 1500
  },
  server: {
    open: true
  }
};

export default defineConfig(config);