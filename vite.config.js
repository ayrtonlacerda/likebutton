import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./LikeButton": "./src/LikeButton",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});

/*export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001, // Serviremos o componente em localhost:3001
  },
  build: {
    rollupOptions: {
      input: resolve(__dirname, "src/LikeButton.jsx"),
      preserveEntrySignatures: "exports-only",
      //external: ["react", "react-dom"], // Evita incluir essas libs no bundle
      output: {
        entryFileNames: "bundle.js",
        format: "esm", // Formato de saída do bundle
      },
    },
  },
});*/
