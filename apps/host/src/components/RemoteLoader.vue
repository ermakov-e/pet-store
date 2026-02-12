<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
import Spinner from './Spinner.vue'

const props = defineProps<{
  remote: string
  module: string
}>()

// Статические импорты для каждого удалённого модуля
const moduleImports: Record<string, Record<string, () => Promise<any>>> = {
  mfCatalog: {
    './CatalogApp': () => import('mfCatalog/CatalogApp'),
    './ProductList': () => import('mfCatalog/ProductList'),
    './ProductCard': () => import('mfCatalog/ProductCard'),
    './ProductFilter': () => import('mfCatalog/ProductFilter'),
    './SearchBar': () => import('mfCatalog/SearchBar'),
  },
}

const RemoteComponent = defineAsyncComponent({
  loader: async () => {
    const remoteModules = moduleImports[props.remote]
    if (!remoteModules) {
      console.error(`Remote "${props.remote}" not configured`)
      return () => null
    }
    
    const loadModule = remoteModules[props.module]
    if (!loadModule) {
      console.error(`Module "${props.module}" not found in remote "${props.remote}"`)
      return () => null
    }
    
    try {
      const module = await loadModule()
      return module.default || module
    } catch (error) {
      console.error(`Failed to load remote module: ${props.remote}/${props.module}`, error)
      return () => null
    }
  },
  loadingComponent: Spinner,
  errorComponent: () => null,
  delay: 200,
})
</script>

<template>
  <div class="remote-loader">
    <Suspense>
      <RemoteComponent />
      <template #fallback>
        <Spinner />
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
.remote-loader {
  min-height: 400px;
}
</style>
