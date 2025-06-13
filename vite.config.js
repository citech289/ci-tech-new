import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { historyApiFallback: true },

  resolve: {
    alias: {
      "@": "/src",
      "components": "/src/components",
      "pages": "/src/pages",
      "assets": "/src/assets",
      "utils": "/src/utils",
    },
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "@/styles/variables.css";`,
      },
    },
  },

  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "tailwindcss"],
  },
  base: "/",
  publicDir: "public",
  build: { outDir: "dist" },
});
