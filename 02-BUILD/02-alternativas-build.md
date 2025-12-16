# Alternativas de Build - Análise Completa

## 📋 Visão Geral

Esta análise detalha as principais alternativas ao TSUP para build de bibliotecas TypeScript/React.

## 🔧 Rollup

### O que é?

Rollup é um bundler JavaScript focado em bibliotecas, conhecido por seu excelente tree-shaking.

### Características

- ✅ Tree-shaking excepcional
- ✅ Ecossistema robusto de plugins
- ✅ Flexibilidade alta
- ✅ Bom para bibliotecas
- ✅ Suporte a múltiplos formatos

### Configuração

```javascript
// rollup.config.js
import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.cjs', format: 'cjs' },
    { file: 'dist/index.mjs', format: 'esm' }
  ],
  plugins: [
    typescript({ declaration: true }),
    nodeResolve(),
    commonjs()
  ],
  external: ['react']
};
```

### Prós

- ✅ Tree-shaking excelente
- ✅ Muitos plugins disponíveis
- ✅ Muito flexível
- ✅ Maduro e estável
- ✅ Documentação extensa

### Contras

- ❌ Mais lento que TSUP (5-10s vs 2-5s)
- ❌ Configuração mais complexa
- ❌ Múltiplos plugins necessários
- ❌ TypeScript requer plugin
- ❌ .d.ts precisa de configuração extra

### Quando Usar

✅ Precisa de plugins específicos  
✅ Transformações complexas  
✅ Projetos grandes com requisitos específicos

## 🔧 Webpack

### O que é?

Webpack é um bundler poderoso e flexível, amplamente usado em aplicações.

### Características

- ✅ Ecossistema enorme
- ✅ Muitos recursos
- ✅ Code splitting avançado
- ✅ Hot Module Replacement
- ✅ Muitos loaders/plugins

### Configuração

```javascript
// webpack.config.js
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    library: { type: 'umd' }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  externals: {
    react: 'react'
  }
};
```

### Prós

- ✅ Ecossistema gigante
- ✅ Muitos recursos
- ✅ Code splitting avançado
- ✅ HMR excelente
- ✅ Muitos loaders/plugins

### Contras

- ❌ Configuração muito complexa
- ❌ Muito mais lento (10-20s)
- ❌ Overhead alto
- ❌ Não ideal para bibliotecas simples
- ❌ Bundle size maior

### Quando Usar

✅ Aplicações complexas  
✅ Precisa de recursos específicos do Webpack  
✅ Projetos legados

## 🔧 Vite

### O que é?

Vite é um build tool moderna, extremamente rápida, focada em desenvolvimento.

### Características

- ✅ Dev server muito rápido
- ✅ HMR excelente
- ✅ TypeScript nativo
- ✅ Baseado em Rollup para produção
- ✅ Configuração simples

### Configuração

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`
    },
    rollupOptions: {
      external: ['react']
    }
  },
  plugins: [react()]
});
```

### Prós

- ✅ Dev server muito rápido
- ✅ HMR excelente
- ✅ TypeScript nativo
- ✅ Baseado em Rollup (produção)
- ✅ Configuração simples

### Contras

- ❌ Focado em apps (lib mode menos maduro)
- ❌ Pode ser overkill para libs simples
- ❌ Configuração para múltiplos formatos mais trabalhosa

### Quando Usar

✅ Apps com bibliotecas internas  
✅ Precisa de dev server rápido  
✅ Projetos Vite existentes

## 🔧 ESBuild Direto

### O que é?

Usar ESBuild diretamente, sem wrapper.

### Características

- ✅ Máxima performance
- ✅ Controle total
- ✅ Sem abstrações
- ✅ Bundle menor

### Configuração

```javascript
// build.js
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['src/index.ts'],
  bundle: true,
  outfile: 'dist/index.js',
  format: 'esm',
  external: ['react'],
  minify: true,
  sourcemap: true
}).catch(() => process.exit(1));
```

### Prós

- ✅ Performance máxima
- ✅ Controle total
- ✅ Sem abstrações
- ✅ Bundle menor

### Contras

- ❌ Sem geração automática de .d.ts
- ❌ Configuração manual
- ❌ Múltiplos formatos = múltiplos builds
- ❌ Sem convenções
- ❌ Mais código para manter

### Quando Usar

✅ Performance crítica  
✅ Controle total necessário  
✅ Projetos simples

## 📊 Tabela Comparativa Completa

| Aspecto | TSUP | Rollup | Webpack | Vite | ESBuild |
|---------|------|--------|---------|------|---------|
| **Velocidade** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Simplicidade** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **TypeScript** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| **.d.ts automático** | ✅ | ❌ | ❌ | ❌ | ❌ |
| **Tree-shaking** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Plugins** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| **Flexibilidade** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Configuração** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Bundle size** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Dev Experience** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Manutenção** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Curva aprendizado** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Ecossistema** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |

## 🎯 Recomendações por Cenário

### Bibliotecas de Componentes (Verniz)

**Recomendação: TSUP**

- Performance excepcional
- Simplicidade máxima
- TypeScript nativo
- Perfeito para o caso de uso

### Precisa de Plugins Específicos

**Recomendação: Rollup**

- Ecossistema robusto
- Flexibilidade alta
- Muitos plugins disponíveis

### Aplicações com Libs Internas

**Recomendação: Vite**

- Dev server rápido
- HMR excelente
- Integração natural

### Performance Crítica

**Recomendação: TSUP ou ESBuild**

- Máxima velocidade
- Builds em segundos

### Projetos Legados

**Recomendação: Webpack**

- Se já está usando
- Ecossistema conhecido

## ✅ Conclusão

Para a biblioteca Verniz, **TSUP é a escolha recomendada** porque oferece:

1. ✅ Melhor performance
2. ✅ Simplicidade máxima
3. ✅ TypeScript nativo
4. ✅ Perfeito para bibliotecas
5. ✅ Manutenção simples

**Alternativas consideradas:**
- Rollup: Se precisar de plugins específicos
- Vite: Se for parte de projeto Vite maior
- Webpack: Não recomendado para libs simples
- ESBuild: Se performance for crítica e aceitar mais trabalho manual

---

A escolha de TSUP garante desenvolvimento rápido, builds eficientes e manutenção simplificada.

