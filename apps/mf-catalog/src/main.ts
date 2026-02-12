import { createApp } from 'vue'
import { createPinia } from 'pinia'
import CatalogApp from './App.vue'
import './styles/main.css'

const app = createApp(CatalogApp)
app.use(createPinia())
app.mount('#app')
