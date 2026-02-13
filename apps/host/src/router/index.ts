import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("mfCatalog/CatalogApp"),
    props: {
      remote: "mfCatalog",
      module: "./CatalogApp",
    },
    meta: {
      title: "Каталог",
    },
  },
  {
    path: "/catalog",
    name: "catalog",
    component: () => import("mfCatalog/CatalogApp"),
    props: {
      remote: "mfCatalog",
      module: "./CatalogApp",
    },
    meta: {
      title: "Каталог товаров",
    },
  },
  {
    path: "/catalog/:category",
    name: "catalog-category",
    component: () => import("mfCatalog/CatalogApp"),
    props: {
      remote: "mfCatalog",
      module: "./CatalogApp",
    },
    meta: {
      title: "Категория",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not-found",
    component: () => import("../components/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
