import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // FIX 1: Use relative base to ensure assets load correctly on GitHub Pages subdirectory
  base: './', 
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
  plugins: [react()],
  // FIX 2: CSP Violation and Eval Error Fix
  build: {
    sourcemap: 'hidden', 
  },
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
});