# Configuração TSUP - Guia Completo

## 📋 Configuração Básica

### Setup Inicial

```bash
# Instalar TSUP
yarn add -D tsup
```

### Configuração Mínima

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

## ⚙️ Configuração Recomendada para Verniz

### Configuração Completa

```typescript
// tsup.config.ts
import { defineConfig } from 'tsup';

export default defineConfig({
  // Arquivos de entrada
  entry: ['src/index.tsx'],
  
  // Gera arquivos .d.ts automaticamente
  dts: true,
  
  // Formatos de saída
  format: ['esm', 'cjs'],
  
  // Dependências externas (não bundladas)
  external: [
    'react',
    'react-dom',
    'react/jsx-runtime'
  ],
  
  // Code splitting (desabilitado para libs)
  splitting: false,
  
  // Sourcemaps
  sourcemap: true,
  
  // Limpa dist antes de build
  clean: true,
  
  // Minificação (opcional)
  minify: false, // Geralmente false para libs
  
  // Tree-shaking
  treeshake: true,
  
  // Diretório de saída
  outDir: 'dist',
  
  // Extensões de arquivo customizadas
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.mjs',
    };
  },
  
  // Opções do ESBuild
  esbuildOptions(options) {
    options.platform = 'browser';
    options.target = 'es2020';
  },
  
  // Excluir arquivos do bundle
  noExternal: [],
  
  // Incluir arquivos específicos
  include: ['src/**/*'],
  
  // Excluir arquivos
  exclude: [
    '**/*.spec.tsx',
    '**/*.stories.tsx',
    '**/__tests__/**',
    '**/node_modules/**'
  ]
});
```

## 📦 Configuração no package.json

### Exports Condicionais

```json
{
  "name": "@verniz/button",
  "version": "0.0.1",
  "main": "./dist/index.cjs",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.mjs"
      },
      "require": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.cjs"
      }
    }
  },
  "files": [
    "dist/**"
  ],
  "sideEffects": false,
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "build:prod": "tsup --minify"
  }
}
```

## 🎯 Configurações por Cenário

### Componente Simples

```typescript
// tsup.config.ts
export default defineConfig({
  entry: ['src/index.tsx'],
  dts: true,
  format: ['esm', 'cjs'],
  external: ['react', 'react-dom']
});
```

### Componente com Múltiplos Exports

```typescript
// tsup.config.ts
export default defineConfig({
  entry: [
    'src/index.tsx',
    'src/components/**/index.tsx'
  ],
  dts: true,
  format: ['esm', 'cjs'],
  external: ['react', 'react-dom']
});
```

### Biblioteca com Utilitários

```typescript
// tsup.config.ts
export default defineConfig({
  entry: {
    index: 'src/index.ts',
    utils: 'src/utils/index.ts'
  },
  dts: true,
  format: ['esm', 'cjs'],
  external: ['react']
});
```

## 🔧 Opções Avançadas

### Watch Mode

```typescript
// tsup.config.ts
export default defineConfig({
  entry: ['src/index.tsx'],
  dts: true,
  format: ['esm', 'cjs'],
  watch: process.env.NODE_ENV === 'development',
  onSuccess: 'echo "Build successful!"'
});
```

### Metafile (Análise de Bundle)

```typescript
// tsup.config.ts
export default defineConfig({
  entry: ['src/index.tsx'],
  dts: true,
  format: ['esm', 'cjs'],
  metafile: true, // Gera dist/meta.json
  external: ['react']
});
```

### Banner Customizado

```typescript
// tsup.config.ts
export default defineConfig({
  entry: ['src/index.tsx'],
  dts: true,
  format: ['esm', 'cjs'],
  banner: {
    js: '"use client";' // Para Next.js
  },
  external: ['react']
});
```

## 📝 Scripts Úteis

### package.json

```json
{
  "scripts": {
    "build": "tsup",
    "build:watch": "tsup --watch",
    "build:prod": "tsup --minify",
    "build:analyze": "tsup --metafile",
    "type-check": "tsc --noEmit"
  }
}
```

## 🎨 Integração com Turborepo

### turbo.json

```json
{
  "tasks": {
    "build": {
      "outputs": ["dist/**"],
      "dependsOn": ["^build"]
    }
  }
}
```

### package.json (root)

```json
{
  "scripts": {
    "build": "turbo run build"
  }
}
```

## ⚠️ Boas Práticas

### 1. Externalizar Dependências Peer

```typescript
external: [
  'react',
  'react-dom',
  'react/jsx-runtime'
]
```

### 2. Excluir Arquivos de Teste

```typescript
exclude: [
  '**/*.spec.tsx',
  '**/*.stories.tsx',
  '**/__tests__/**'
]
```

### 3. Usar sideEffects: false

```json
{
  "sideEffects": false
}
```

### 4. Type-checking Separado

```json
{
  "scripts": {
    "build": "tsup",
    "type-check": "tsc --noEmit"
  }
}
```

### 5. Sourcemaps em Desenvolvimento

```typescript
sourcemap: process.env.NODE_ENV === 'development'
```

## 🐛 Troubleshooting

### Problema: .d.ts não gerado

**Solução:**
```typescript
dts: true, // Garantir que está habilitado
```

### Problema: Dependências bundladas

**Solução:**
```typescript
external: ['react', 'react-dom'] // Adicionar ao external
```

### Problema: Build lento

**Solução:**
- Verificar se está usando cache (Turborepo)
- Excluir arquivos desnecessários
- Usar `splitting: false` para libs

### Problema: Erros de tipo

**Solução:**
```bash
# Executar type-check separado
yarn type-check
```

## 📊 Output Esperado

### Estrutura de Arquivos

```
dist/
├── index.mjs          # ESM
├── index.cjs          # CJS
├── index.d.ts         # TypeScript definitions
└── index.mjs.map      # Sourcemap (se habilitado)
```

## ✅ Checklist de Configuração

- [ ] TSUP instalado
- [ ] `tsup.config.ts` criado
- [ ] Entry points configurados
- [ ] Dependências externalizadas
- [ ] Formatos de saída definidos
- [ ] .d.ts habilitado
- [ ] package.json exports configurados
- [ ] Scripts de build criados
- [ ] Testado localmente

---

Esta configuração garante builds otimizados, TypeScript definitions automáticas e compatibilidade com diferentes sistemas de módulos.

