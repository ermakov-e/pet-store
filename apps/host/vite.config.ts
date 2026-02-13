import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "host",
      filename: "remoteEntry.js",

      // Удалённые модули (Remote)
      remotes: {
        mfCatalog: "http://localhost:4173/assets/remoteEntry.js",
      },

      // Общие зависимости (Shared)
      shared: ["vue", "vue-router", "pinia"],
    }),
  ],

  build: {
    target: "esnext",
  },

  preview: {
    port: 4170,
    strictPort: true,
  },

  server: {
    port: 4170,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
