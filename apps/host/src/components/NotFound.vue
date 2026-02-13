<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="not-found">
    <div class="not-found-content">
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>Извините, запрашиваемая страница не существует или была перемещена.</p>
      <RouterLink to="/" class="home-link">Вернуться на главную</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
}

.not-found-content {
  text-align: center;
  max-width: 400px;
}

h1 {
  font-size: 6rem;
  font-weight: var(--font-weight-bold);
  color: var(--color-gray-200);
  margin: 0;
  line-height: 1;
}

h2 {
  font-size: var(--font-size-2xl);
  color: var(--color-gray-700);
  margin: var(--spacing-4) 0 var(--spacing-2);
}

p {
  color: var(--color-gray-500);
  margin-bottom: var(--spacing-6);
}

.home-link {
  display: inline-block;
  padding: var(--spacing-3) var(--spacing-6);
  background-color: var(--color-primary);
  color: var(--color-white);
  text-decoration: none;
  border-radius: var(--border-radius);
  font-weight: var(--font-weight-medium);
  transition: background-color var(--transition-fast);
}

.home-link:hover {
  background-color: var(--color-primary-hover);
}
</style>
