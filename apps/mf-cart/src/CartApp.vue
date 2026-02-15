<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";
import React from "react";
// eslint-disable-next-line @typescript-eslint/no-restricted-imports
import ReactDOMClient from "react-dom/client";
import App from "./App";
import "./styles/main.css";

// Контейнер для React-приложения
const containerRef = ref<HTMLElement | null>(null);
let reactRoot: ReactDOMClient.Root | null = null;

onMounted(() => {
  if (containerRef.value) {
    // Создаём React root и монтируем приложение
    reactRoot = ReactDOMClient.createRoot(containerRef.value);
    
    // Рендерим React-компонент
    reactRoot.render(
      React.createElement(React.StrictMode, null, React.createElement(App))
    );
  }
});

onUnmounted(() => {
  // Очищаем React-приложение
  if (reactRoot) {
    reactRoot.unmount();
    reactRoot = null;
  }
});
</script>

<template>
  <div ref="containerRef" class="react-cart-container"></div>
</template>

<style scoped>
.react-cart-container {
  width: 100%;
  height: 100%;
}
</style>

