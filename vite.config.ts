import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // CRITICAL FIX: Use relative base './' to ensure assets load correctly
  base: './', 
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
});