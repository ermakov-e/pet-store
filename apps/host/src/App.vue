<script setup lang="ts">
import { RouterView } from "vue-router";
import AppHeader from "./components/AppHeader.vue";
import AppSidebar from "./components/AppSidebar.vue";
</script>

<template>
  <div class="app-container">
    <AppHeader />
    <div class="app-layout">
      <AppSidebar />
      <main class="app-main">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-layout {
  display: flex;
  flex: 1;
}

.app-main {
  flex: 1;
  padding: var(--spacing-6);
  background-color: var(--color-gray-50);
  overflow-y: auto;
}
</style>
