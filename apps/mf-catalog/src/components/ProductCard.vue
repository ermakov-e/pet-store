<script setup lang="ts">
import type { Product } from '../types'

const props = defineProps<{
  product: Product
}>()

const emit = defineEmits<{
  addToCart: [product: Product]
}>()

function formatPrice(price: number): string {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  }).format(price)
}

function handleAddToCart() {
  emit('addToCart', props.product)
}
</script>

<template>
  <div class="product-card" :class="{ 'out-of-stock': !product.inStock }">
    <div class="product-image">
      <img :src="product.image" :alt="product.name" />
      <span v-if="!product.inStock" class="out-of-stock-badge">Нет в наличии</span>
    </div>
    
    <div class="product-info">
      <span class="product-category">{{ product.category }}</span>
      <h3 class="product-name">{{ product.name }}</h3>
      <p class="product-description">{{ product.description }}</p>
      
      <div class="product-footer">
        <span class="product-price">{{ formatPrice(product.price) }}</span>
        <button 
          class="add-to-cart-btn"
          :disabled="!product.inStock"
          @click="handleAddToCart"
        >
          В корзину
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-card {
  background-color: var(--color-white);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-base);
}

.product-card:hover {
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}

.product-card.out-of-stock {
  opacity: 0.7;
}

.product-image {
  position: relative;
  aspect-ratio: 3/2;
  overflow: hidden;
  background-color: var(--color-gray-100);
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-slow);
}

.product-card:hover .product-image img {
  transform: scale(1.05);
}

.out-of-stock-badge {
  position: absolute;
  top: var(--spacing-3);
  right: var(--spacing-3);
  background-color: var(--color-error);
  color: var(--color-white);
  padding: var(--spacing-1) var(--spacing-3);
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
}

.product-info {
  padding: var(--spacing-4);
}

.product-category {
  display: inline-block;
  font-size: var(--font-size-xs);
  color: var(--color-gray-500);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-2);
}

.product-name {
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-2);
  line-height: 1.3;
}

.product-description {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  margin-bottom: var(--spacing-4);
  line-height: 1.5;
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-price {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-900);
}

.add-to-cart-btn {
  padding: var(--spacing-2) var(--spacing-4);
  background-color: var(--color-primary);
  color: var(--color-white);
  border-radius: var(--border-radius);
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-sm);
  transition: all var(--transition-fast);
}

.add-to-cart-btn:hover:not(:disabled) {
  background-color: var(--color-primary-hover);
}

.add-to-cart-btn:disabled {
  background-color: var(--color-gray-300);
  cursor: not-allowed;
}
</style>
