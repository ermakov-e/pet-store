import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import RemoteLoader from '../components/RemoteLoader.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: RemoteLoader,
    props: {
      remote: 'mfCatalog',
      module: './CatalogApp',
    },
    meta: {
      title: 'Каталог',
    },
  },
  {
    path: '/catalog',
    name: 'catalog',
    component: RemoteLoader,
    props: {
      remote: 'mfCatalog',
      module: './CatalogApp',
    },
    meta: {
      title: 'Каталог товаров',
    },
  },
  {
    path: '/catalog/:category',
    name: 'catalog-category',
    component: RemoteLoader,
    props: {
      remote: 'mfCatalog',
      module: './CatalogApp',
    },
    meta: {
      title: 'Категория',
    },
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../components/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
