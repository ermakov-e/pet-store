import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "mfCatalog",
      filename: "remoteEntry.js",

      // Экспортируемые модули
      exposes: {
        "./CatalogApp": "./src/App.vue",
        "./ProductList": "./src/components/ProductList.vue",
        "./ProductCard": "./src/components/ProductCard.vue",
        "./ProductFilter": "./src/components/ProductFilter.vue",
        "./SearchBar": "./src/components/SearchBar.vue",
      },

      // Общие зависимости
      shared: ["vue", "vue-router", "pinia"],
    }),
  ],

  build: {
    target: "esnext",
  },

  preview: {
    port: 4173,
    strictPort: true,
  },

  server: {
    port: 4173,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
