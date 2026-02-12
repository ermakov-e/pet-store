<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <aside class="app-sidebar">
    <nav class="sidebar-nav">
      <RouterLink to="/" class="nav-item">
        <span class="nav-icon">🏠</span>
        <span>Главная</span>
      </RouterLink>
      
      <RouterLink to="/catalog" class="nav-item">
        <span class="nav-icon">📦</span>
        <span>Каталог</span>
      </RouterLink>
      
      <RouterLink to="/cart" class="nav-item">
        <span class="nav-icon">🛒</span>
        <span>Корзина</span>
      </RouterLink>
      
      <RouterLink to="/orders" class="nav-item">
        <span class="nav-icon">📋</span>
        <span>Заказы</span>
      </RouterLink>
      
      <RouterLink to="/profile" class="nav-item">
        <span class="nav-icon">👤</span>
        <span>Профиль</span>
      </RouterLink>
      
      <div class="sidebar-divider"></div>
      
      <RouterLink to="/admin" class="nav-item admin">
        <span class="nav-icon">⚙️</span>
        <span>Админ-панель</span>
      </RouterLink>
    </nav>
  </aside>
</template>

<style scoped>
.app-sidebar {
  width: 240px;
  background-color: var(--color-white);
  border-right: 1px solid var(--color-gray-200);
  padding: var(--spacing-4);
}

.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-1);
}

.nav-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-3);
  padding: var(--spacing-3) var(--spacing-4);
  text-decoration: none;
  color: var(--color-gray-700);
  border-radius: var(--border-radius);
  transition: all var(--transition-fast);
}

.nav-item:hover {
  background-color: var(--color-gray-100);
}

.nav-item.router-link-active {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.nav-item.admin {
  color: var(--color-gray-500);
}

.nav-icon {
  font-size: var(--font-size-lg);
}

.sidebar-divider {
  height: 1px;
  background-color: var(--color-gray-200);
  margin: var(--spacing-4) 0;
}
</style>
