<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="app-header">
    <div class="header-content">
      <RouterLink to="/" class="logo">
        <span class="logo-icon">🏪</span>
        <span class="logo-text">Внутренний магазин</span>
      </RouterLink>
      
      <nav class="header-nav">
        <RouterLink to="/catalog">Каталог</RouterLink>
        <RouterLink to="/cart">Корзина</RouterLink>
        <RouterLink to="/profile">Профиль</RouterLink>
        <RouterLink to="/orders">Заказы</RouterLink>
      </nav>
      
      <div class="header-user">
        <span class="user-avatar">👤</span>
        <span class="user-name">Иван Иванов</span>
      </div>
    </div>
  </header>
</template>

<style scoped>
.app-header {
  background-color: var(--color-white);
  border-bottom: 1px solid var(--color-gray-200);
  padding: var(--spacing-4) var(--spacing-6);
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-lg);
}

.logo-icon {
  font-size: var(--font-size-2xl);
}

.header-nav {
  display: flex;
  gap: var(--spacing-6);
}

.header-nav a {
  text-decoration: none;
  color: var(--color-gray-600);
  font-weight: var(--font-weight-medium);
  transition: color var(--transition-fast);
}

.header-nav a:hover,
.header-nav a.router-link-active {
  color: var(--color-primary);
}

.header-user {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
}

.user-avatar {
  font-size: var(--font-size-xl);
}

.user-name {
  color: var(--color-gray-700);
  font-size: var(--font-size-sm);
}
</style>
