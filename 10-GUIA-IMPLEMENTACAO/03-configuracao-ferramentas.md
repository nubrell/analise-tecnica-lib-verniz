# Configuração de Ferramentas - Biblioteca Verniz

## 📋 Ferramentas a Configurar

### 1. TSUP

```typescript
// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  dts: true,
  format: ['esm', 'cjs'],
  external: ['react', 'react-dom']
});
```

### 2. Vitest

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom'
  }
});
```

### 3. Storybook

```bash
cd apps/docs
npx storybook@latest init
```

### 4. Tailwind CSS

```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 5. Hygen

```bash
# Criar templates em _templates/
# Configurar script no package.json
```

## ✅ Checklist

- [ ] TSUP configurado
- [ ] Vitest configurado
- [ ] Storybook configurado
- [ ] Tailwind CSS configurado
- [ ] Hygen templates criados

---

Configuração completa de todas as ferramentas garante ambiente de desenvolvimento funcional.

