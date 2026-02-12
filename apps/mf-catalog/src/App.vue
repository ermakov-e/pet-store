<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import SearchBar from './components/SearchBar.vue'
import ProductFilter from './components/ProductFilter.vue'
import ProductList from './components/ProductList.vue'
import { useCatalogStore } from './stores/catalogStore'
import type { Product } from './types'

const catalogStore = useCatalogStore()

const searchQuery = ref('')
const selectedCategory = ref<string | null>(null)
const priceRange = ref<[number, number]>([0, 100000])

const categories = [
  { id: 'electronics', name: 'Электроника' },
  { id: 'office', name: 'Канцтовары' },
  { id: 'furniture', name: 'Мебель' },
  { id: 'accessories', name: 'Аксессуары' },
  { id: 'software', name: 'Программное обеспечение' },
]

const filteredProducts = computed(() => {
  let products = catalogStore.products
  
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    products = products.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query)
    )
  }
  
  if (selectedCategory.value) {
    products = products.filter(p => p.category === selectedCategory.value)
  }
  
  products = products.filter(p => 
    p.price >= priceRange.value[0] && p.price <= priceRange.value[1]
  )
  
  return products
})

function handleSearch(query: string) {
  searchQuery.value = query
}

function handleCategoryChange(categoryId: string | null) {
  selectedCategory.value = categoryId
}

function handlePriceChange(range: [number, number]) {
  priceRange.value = range
}

onMounted(() => {
  catalogStore.fetchProducts()
})
</script>

<template>
  <div class="catalog-app">
    <div class="catalog-header">
      <h1>Каталог товаров</h1>
      <p class="subtitle">Внутренний магазин компании</p>
    </div>
    
    <div class="catalog-controls">
      <SearchBar @search="handleSearch" />
    </div>
    
    <div class="catalog-content">
      <aside class="catalog-sidebar">
        <ProductFilter 
          :categories="categories"
          :selected-category="selectedCategory"
          :price-range="priceRange"
          @category-change="handleCategoryChange"
          @price-change="handlePriceChange"
        />
      </aside>
      
      <main class="catalog-main">
        <div class="products-header">
          <span class="products-count">
            Найдено товаров: {{ filteredProducts.length }}
          </span>
        </div>
        
        <ProductList :products="filteredProducts" />
      </main>
    </div>
  </div>
</template>

<style scoped>
.catalog-app {
  max-width: 1200px;
  margin: 0 auto;
}

.catalog-header {
  margin-bottom: var(--spacing-6);
}

.catalog-header h1 {
  font-size: var(--font-size-3xl);
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-2);
}

.subtitle {
  color: var(--color-gray-500);
  font-size: var(--font-size-lg);
}

.catalog-controls {
  margin-bottom: var(--spacing-6);
}

.catalog-content {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: var(--spacing-6);
}

.catalog-sidebar {
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  padding: var(--spacing-4);
  height: fit-content;
  position: sticky;
  top: var(--spacing-4);
}

.catalog-main {
  min-width: 0;
}

.products-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-4);
}

.products-count {
  color: var(--color-gray-500);
  font-size: var(--font-size-sm);
}

@media (max-width: 768px) {
  .catalog-content {
    grid-template-columns: 1fr;
  }
  
  .catalog-sidebar {
    position: static;
  }
}
</style>
