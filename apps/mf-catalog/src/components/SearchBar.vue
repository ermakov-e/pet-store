<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits<{
  search: [query: string];
}>();

const searchQuery = ref("");

function handleSearch() {
  emit("search", searchQuery.value);
}

function handleClear() {
  searchQuery.value = "";
  emit("search", "");
}
</script>

<template>
  <div class="search-bar">
    <div class="search-input-wrapper">
      <span class="search-icon">🔍</span>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Поиск товаров..."
        class="search-input"
        @input="handleSearch"
      />
      <button v-if="searchQuery" class="clear-btn" @click="handleClear">
        ✕
      </button>
    </div>
  </div>
</template>

<style scoped>
.search-bar {
  width: 100%;
}

.search-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.search-icon {
  position: absolute;
  left: var(--spacing-4);
  font-size: var(--font-size-lg);
  opacity: 0.5;
}

.search-input {
  width: 100%;
  padding: var(--spacing-3) var(--spacing-4);
  padding-left: calc(var(--spacing-4) + 28px);
  padding-right: calc(var(--spacing-4) + 28px);
  border: 1px solid var(--color-gray-300);
  border-radius: var(--border-radius-lg);
  font-size: var(--font-size-base);
  background-color: var(--color-white);
  transition: all var(--transition-fast);
}

.search-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
}

.search-input::placeholder {
  color: var(--color-gray-400);
}

.clear-btn {
  position: absolute;
  right: var(--spacing-3);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-400);
  border-radius: 50%;
  transition: all var(--transition-fast);
}

.clear-btn:hover {
  background-color: var(--color-gray-100);
  color: var(--color-gray-600);
}
</style>
