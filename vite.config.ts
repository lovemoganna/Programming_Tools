/// <reference types="vitest" />
import path from "path";
import { fileURLToPath } from "url";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  // 'serve' = local dev → base is '/'
  // 'build' = CI production build → base is the GitHub Pages repo subpath
  base: command === "build" ? "/Programming_Tools/" : "/",

  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    port: 5175,
    host: "127.0.0.1",
    strictPort: true,
  },
  // Tell Vite to treat .wasm files as static assets (needed for DuckDB ?url imports)
  assetsInclude: ["**/*.wasm"],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react") || id.includes("scheduler")) {
              return "react-core";
            }
            if (id.includes("framer-motion")) {
              return "framer-motion";
            }
            if (id.includes("apache-arrow") || id.includes("duckdb")) {
              return "duckdb-arrow";
            }
            return "vendor";
          }
        },
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./src/test/setup.ts",
  },
}));
