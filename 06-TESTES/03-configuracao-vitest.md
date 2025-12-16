# Configuração Vitest - Guia Completo

## 📋 Setup Inicial

### Instalação

```bash
yarn add -D vitest @vitest/ui @vitest/coverage-v8 @testing-library/react @testing-library/jest-dom
```

### Configuração Básica

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: ['**/*.stories.tsx']
    }
  }
});
```

## ⚙️ Configuração Recomendada

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test/setup.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'src/test/',
        '**/*.d.ts',
        '**/*.stories.*'
      ],
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
});
```

## 📝 Scripts

```json
{
  "scripts": {
    "test": "vitest run --coverage",
    "test:watch": "vitest",
    "test:ui": "vitest --ui"
  }
}
```

## ✅ Checklist

- [ ] Vitest instalado
- [ ] Configuração criada
- [ ] Setup file configurado
- [ ] Scripts adicionados
- [ ] Testado localmente

---

Esta configuração garante testes rápidos e eficientes com Vitest.

