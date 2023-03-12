import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const config = {
  base: '/imaps/',
  plugins: [react()],
};

export default defineConfig(config);