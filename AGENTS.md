# Agent Guidelines for Pet Store

This document provides guidelines for AI agents working in the pet-store codebase.

## Project Overview

Micro-frontend monorepo using Vue 3 + TypeScript with Module Federation.

- **Host app** (`@pet-store/host`): Port 4170, orchestrates remote modules
- **Catalog app** (`@pet-store/mf-catalog`): Port 4173, exposes product components
- **Package manager**: pnpm with workspaces
- **Build tool**: Vite with @originjs/vite-plugin-federation

## Build & Development Commands

```bash
# Development
pnpm dev:all          # Run all apps in parallel
pnpm dev:host         # Run only host app
pnpm dev:catalog      # Run only catalog app

# Building
pnpm build            # Build all apps
pnpm build:host       # Build host only
pnpm build:catalog    # Build catalog only

# Quality checks
pnpm lint             # ESLint check all files (.ts, .tsx, .vue)
pnpm typecheck        # TypeScript check all apps (vue-tsc --noEmit)

# Preview built apps
pnpm preview          # Preview host app
```

## Code Style Guidelines

### TypeScript

- Use **strict mode** (enabled in tsconfig.base.json)
- Define interfaces for all data structures in `types/index.ts`
- Use explicit return types for public functions
- Prefer `type` over `interface` for simple object shapes
- Use `const` and `let` (no `var`)
- Enable `noUnusedLocals` and `noUnusedParameters`

### Vue Components

```vue
<script setup lang="ts">
// 1. Import types first
import type { Product } from "../types";

// 2. Import Vue APIs
import { ref, computed } from "vue";

// 3. Import internal modules
import ProductCard from "./ProductCard.vue";

// 4. Define props with explicit types
const props = defineProps<{
  product: Product;
}>();

// 5. Define emits with tuple types
const emit = defineEmits<{
  addToCart: [product: Product];
}>();

// 6. Use camelCase for functions
function handleAddToCart() {
  emit("addToCart", props.product);
}
</script>
```

### Naming Conventions

| Type                | Convention              | Example                            |
| ------------------- | ----------------------- | ---------------------------------- |
| Components          | PascalCase              | `ProductCard.vue`, `AppHeader.vue` |
| Component files     | PascalCase              | `RemoteLoader.vue`                 |
| Stores              | useXxxStore (camelCase) | `useCatalogStore`                  |
| Functions/variables | camelCase               | `fetchProducts`, `isLoading`       |
| CSS classes         | kebab-case              | `product-card`, `app-header`       |
| Types/Interfaces    | PascalCase              | `Product`, `Category`              |
| Constants           | UPPER_SNAKE_CASE        | `API_BASE_URL`                     |

### Styling

- Use **CSS variables** from `main.css` (design tokens)
- Always use **scoped styles** in Vue components
- Follow existing CSS variable naming: `--color-*`, `--spacing-*`, `--font-*`
- Common patterns:
  - Colors: `--color-primary`, `--color-gray-500`, `--color-error`
  - Spacing: `--spacing-4` (1rem base unit)
  - Font sizes: `--font-size-sm`, `--font-size-lg`
  - Shadows: `--shadow-sm`, `--shadow-md`
  - Transitions: `--transition-fast`, `--transition-base`

### Imports

Order matters:

1. External libraries (Vue, Pinia, Router)
2. Type imports (`import type { ... }`)
3. Internal components
4. Internal utilities/stores

Use path alias `@/` for internal imports:

```typescript
import { useCatalogStore } from "@/stores/catalogStore";
```

### Error Handling

```typescript
async function fetchProducts() {
  isLoading.value = true;
  error.value = null;

  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    products.value = mockProducts;
  } catch (e) {
    error.value = "Ошибка при загрузке товаров";
    console.error(e);
  } finally {
    isLoading.value = false;
  }
}
```

### Module Federation

- Expose components from mf-catalog via `vite.config.ts`
- Import remotes using `RemoteLoader.vue` pattern
- Add type declarations in `types/federation.d.ts`
- Shared deps: `vue`, `vue-router`, `pinia`

## Project Structure

```
pet-store/
├── apps/
│   ├── host/              # Main orchestrator app
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── router/
│   │   │   ├── styles/
│   │   │   └── types/
│   │   └── vite.config.ts
│   └── mf-catalog/        # Remote catalog micro-frontend
│       └── src/
│           ├── components/
│           ├── stores/    # Pinia stores (Composition API style)
│           ├── styles/
│           └── types/
├── package.json           # Root scripts and dependencies
├── tsconfig.base.json     # Shared TypeScript config
└── pnpm-workspace.yaml    # Workspace configuration
```

## Additional Notes

- All apps use ES modules (`"type": "module"` in package.json)
- Module Federation remotes run on localhost:4170 (host) and localhost:4173 (catalog)
- Use Russian language for user-facing text
- Use `//` comments for inline notes (Russian or English)
- Prefer `async/await` over raw promises
- Use Pinia's Composition API style (`defineStore` with refs)
