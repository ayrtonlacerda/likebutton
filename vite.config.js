import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Serviremos o componente em localhost:3001
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, "src/LikeButton.jsx"),
      preserveEntrySignatures: "exports-only",
      external: ["react", "react-dom"], // Evita incluir essas libs no bundle
      output: {
        entryFileNames: "bundle.js",
        format: "esm", // Formato de saída do bundle
      },
    },
  },
});
