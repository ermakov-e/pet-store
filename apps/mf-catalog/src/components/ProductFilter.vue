<script setup lang="ts">
import { ref, watch } from "vue";
import type { Category } from "../types";

const props = defineProps<{
  categories: Category[];
  selectedCategory: string | null;
  priceRange: [number, number];
}>();

const emit = defineEmits<{
  categoryChange: [categoryId: string | null];
  priceChange: [range: [number, number]];
}>();

const localPriceMin = ref(props.priceRange[0]);
const localPriceMax = ref(props.priceRange[1]);

function handleCategoryClick(categoryId: string | null) {
  emit("categoryChange", categoryId);
}

function handlePriceApply() {
  emit("priceChange", [localPriceMin.value, localPriceMax.value]);
}

watch(
  () => props.priceRange,
  (newRange) => {
    localPriceMin.value = newRange[0];
    localPriceMax.value = newRange[1];
  },
);
</script>

<template>
  <div class="product-filter">
    <div class="filter-section">
      <h3 class="filter-title">Категории</h3>
      <ul class="category-list">
        <li>
          <button
            class="category-btn"
            :class="{ active: selectedCategory === null }"
            @click="handleCategoryClick(null)"
          >
            Все товары
          </button>
        </li>
        <li v-for="category in categories" :key="category.id">
          <button
            class="category-btn"
            :class="{ active: selectedCategory === category.id }"
            @click="handleCategoryClick(category.id)"
          >
            {{ category.name }}
          </button>
        </li>
      </ul>
    </div>

    <div class="filter-section">
      <h3 class="filter-title">Цена</h3>
      <div class="price-inputs">
        <div class="price-input-group">
          <label>От</label>
          <input
            v-model.number="localPriceMin"
            type="number"
            min="0"
            placeholder="0"
          />
        </div>
        <div class="price-input-group">
          <label>До</label>
          <input
            v-model.number="localPriceMax"
            type="number"
            min="0"
            placeholder="100000"
          />
        </div>
      </div>
      <button class="apply-btn" @click="handlePriceApply">Применить</button>
    </div>
  </div>
</template>

<style scoped>
.product-filter {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.filter-section {
  padding-bottom: var(--spacing-4);
  border-bottom: 1px solid var(--color-gray-200);
}

.filter-section:last-child {
  border-bottom: none;
}

.filter-title {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-gray-800);
  margin-bottom: var(--spacing-4);
}

.category-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
}

.category-btn {
  width: 100%;
  text-align: left;
  padding: var(--spacing-2) var(--spacing-3);
  border-radius: var(--border-radius);
  color: var(--color-gray-600);
  font-size: var(--font-size-sm);
  transition: all var(--transition-fast);
}

.category-btn:hover {
  background-color: var(--color-gray-100);
}

.category-btn.active {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.price-inputs {
  display: flex;
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-3);
}

.price-input-group {
  flex: 1;
}

.price-input-group label {
  display: block;
  font-size: var(--font-size-xs);
  color: var(--color-gray-500);
  margin-bottom: var(--spacing-1);
}

.price-input-group input {
  width: 100%;
  padding: var(--spacing-2);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius);
  font-size: var(--font-size-sm);
}

.price-input-group input:focus {
  outline: none;
  border-color: var(--color-primary);
}

.apply-btn {
  width: 100%;
  padding: var(--spacing-2);
  background-color: var(--color-gray-100);
  color: var(--color-gray-700);
  border-radius: var(--border-radius);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  transition: all var(--transition-fast);
}

.apply-btn:hover {
  background-color: var(--color-gray-200);
}
</style>
