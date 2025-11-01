import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  // CRITICAL FIX: Base MUST be relative for GitHub Pages subdirectory deployments
  base: './', 
  server: {
    port: 3000,
    strictPort: false,
    host: true,
  },
  plugins: [react()],
  // 🟢 NEW FIX: CSP VIOLATION RESOLUTION
  build: {
    // This setting changes how source maps are generated, avoiding the 
    // use of 'eval()' which violates GitHub Pages' Content Security Policy.
    sourcemap: 'hidden', 
  },
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "./src"),
    },
  },
});
