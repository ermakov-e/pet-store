// Декларации типов для удалённых модулей Module Federation
declare module "mfCatalog/CatalogApp" {
  import type { Component } from "vue";
  const CatalogApp: Component;
  export default CatalogApp;
}

declare module "mfCatalog/ProductList" {
  import type { Component } from "vue";
  const ProductList: Component;
  export default ProductList;
}

declare module "mfCatalog/ProductCard" {
  import type { Component } from "vue";
  const ProductCard: Component;
  export default ProductCard;
}

declare module "mfCatalog/ProductFilter" {
  import type { Component } from "vue";
  const ProductFilter: Component;
  export default ProductFilter;
}

declare module "mfCatalog/SearchBar" {
  import type { Component } from "vue";
  const SearchBar: Component;
  export default SearchBar;
}

// mfCart - Vue-компонент-обёртка для React-приложения
declare module "mfCart/CartApp" {
  import type { Component } from "vue";
  const CartApp: Component;
  export default CartApp;
}
