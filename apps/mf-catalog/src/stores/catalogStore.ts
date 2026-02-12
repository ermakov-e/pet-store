import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { Product } from '../types'

export const useCatalogStore = defineStore('catalog', () => {
  const products = ref<Product[]>([])
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  // Моковые данные товаров
  const mockProducts: Product[] = [
    {
      id: '1',
      name: 'Ноутбук Dell XPS 15',
      description: 'Мощный ноутбук для работы и творчества',
      price: 89990,
      category: 'electronics',
      image: 'https://placehold.co/300x200?text=Dell+XPS+15',
      inStock: true,
      sku: 'Dell-XPS-15-001'
    },
    {
      id: '2',
      name: 'Монитор Samsung 27"',
      description: 'Ультраширокий изогнутый монитор',
      price: 45990,
      category: 'electronics',
      image: 'https://placehold.co/300x200?text=Samsung+27',
      inStock: true,
      sku: 'Sam-27-001'
    },
    {
      id: '3',
      name: 'Клавиатура Logitech MX Keys',
      description: 'Беспроводная клавиатура с подсветкой',
      price: 8990,
      category: 'electronics',
      image: 'https://placehold.co/300x200?text=Logitech+MX',
      inStock: true,
      sku: 'Log-MX-Keys'
    },
    {
      id: '4',
      name: 'Кресло офисное Herman Miller',
      description: 'Эргономичное кресло для долгой работы',
      price: 65000,
      category: 'furniture',
      image: 'https://placehold.co/300x200?text=Herman+Miller',
      inStock: true,
      sku: 'HM-Aeron-001'
    },
    {
      id: '5',
      name: 'Стол регулируемый',
      description: 'Стол с электрической регулировкой высоты',
      price: 42000,
      category: 'furniture',
      image: 'https://placehold.co/300x200?text=Stool+Adjust',
      inStock: true,
      sku: 'Desk-Adjust-01'
    },
    {
      id: '6',
      name: 'Набор канцтоваров Premium',
      description: 'Качественные принадлежности для офиса',
      price: 2990,
      category: 'office',
      image: 'https://placehold.co/300x200?text=Office+Kit',
      inStock: true,
      sku: 'Office-Prem-01'
    },
    {
      id: '7',
      name: 'Лицензия Microsoft 365 Business',
      description: 'Годовая лицензия для бизнеса',
      price: 12500,
      category: 'software',
      image: 'https://placehold.co/300x200?text=MS+365',
      inStock: true,
      sku: 'MS-365-Biz-01'
    },
    {
      id: '8',
      name: 'Наушники Sony WH-1000XM5',
      description: 'Премиальные беспроводные наушники',
      price: 24990,
      category: 'accessories',
      image: 'https://placehold.co/300x200?text=Sony+XM5',
      inStock: true,
      sku: 'Sony-XM5-001'
    },
    {
      id: '9',
      name: 'Веб-камера Logitech Brio',
      description: '4K веб-камера для видеоконференций',
      price: 15990,
      category: 'electronics',
      image: 'https://placehold.co/300x200?text=Logitech+Brio',
      inStock: true,
      sku: 'Log-Brio-001'
    },
    {
      id: '10',
      name: 'Документ-сканер Fujitsu',
      description: 'Высокоскоростной сканер документов',
      price: 35000,
      category: 'electronics',
      image: 'https://placehold.co/300x200?text=Fujitsu+Scan',
      inStock: false,
      sku: 'Fuj-Scan-001'
    },
    {
      id: '11',
      name: 'Кулер для воды напольный',
      description: 'Напольный кулер с охлаждением и нагревом',
      price: 8900,
      category: 'furniture',
      image: 'https://placehold.co/300x200?text=Cooler+Water',
      inStock: true,
      sku: 'Cool-Water-01'
    },
    {
      id: '12',
      name: 'Папки-регистраторы (50 шт.)',
      description: 'Картонные папки для документов',
      price: 1490,
      category: 'office',
      image: 'https://placehold.co/300x200?text=Registrator',
      inStock: true,
      sku: 'Office-Reg-50'
    }
  ]

  async function fetchProducts() {
    isLoading.value = true
    error.value = null
    
    try {
      // Имитация API запроса
      await new Promise(resolve => setTimeout(resolve, 500))
      products.value = mockProducts
    } catch (e) {
      error.value = 'Ошибка при загрузке товаров'
      console.error(e)
    } finally {
      isLoading.value = false
    }
  }

  return {
    products,
    isLoading,
    error,
    fetchProducts
  }
})
