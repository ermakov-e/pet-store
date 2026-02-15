import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    vue(),
    federation({
      name: "mfCart",
      filename: "remoteEntry.js",

      exposes: {
        // Vue-компонент-обёртка для интеграции с Vue-хостом
        "./CartApp": "./src/CartApp.vue",
      },

      shared: ["react", "react-dom", "vue", "zustand"],
    }),
  ],

  build: {
    target: "esnext",
  },

  preview: {
    port: 4174,
    strictPort: true,
  },

  server: {
    port: 4174,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
