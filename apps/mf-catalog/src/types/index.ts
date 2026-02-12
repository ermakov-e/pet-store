export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: string
  image: string
  inStock: boolean
  sku: string
}

export interface Category {
  id: string
  name: string
}

export interface PriceRange {
  min: number
  max: number
}
