<script setup lang="ts">
import { useCatalogStore } from '../stores/catalogStore'
import ProductCard from './ProductCard.vue'
import type { Product } from '../types'

const props = defineProps<{
  products: Product[]
}>()

const catalogStore = useCatalogStore()

function handleAddToCart(product: Product) {
  // Здесь будет интеграция с корзиной через EventBus или Shared Store
  console.log('Добавлено в корзину:', product.name)
  alert(`Товар "${product.name}" добавлен в корзину!`)
}
</script>

<template>
  <div class="product-list">
    <div v-if="catalogStore.isLoading" class="loading">
      <div class="loading-spinner"></div>
      <p>Загрузка товаров...</p>
    </div>
    
    <div v-else-if="catalogStore.error" class="error">
      <p>{{ catalogStore.error }}</p>
      <button @click="catalogStore.fetchProducts()">Повторить</button>
    </div>
    
    <div v-else-if="products.length === 0" class="empty">
      <p>Товары не найдены</p>
    </div>
    
    <div v-else class="products-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
  </div>
</template>

<style scoped>
.product-list {
  width: 100%;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: var(--spacing-6);
}

.loading,
.error,
.empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  color: var(--color-gray-500);
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid var(--color-gray-200);
  border-top-color: var(--color-primary);
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin-bottom: var(--spacing-4);
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.error button {
  margin-top: var(--spacing-4);
  padding: var(--spacing-2) var(--spacing-4);
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--border-radius);
}
</style>
