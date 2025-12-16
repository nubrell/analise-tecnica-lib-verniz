# Yarn Workspaces - Configuração

## 📋 O que são Workspaces?

**Yarn Workspaces** permitem gerenciar múltiplos pacotes em um único repositório, facilitando o compartilhamento de código e dependências.

## 🎯 Benefícios

- ✅ Instalação única de dependências
- ✅ Compartilhamento de código via workspaces
- ✅ Resolução de dependências unificada
- ✅ Builds coordenados
- ✅ Versionamento simplificado

## ⚙️ Configuração

### Root `package.json`

```json
{
  "name": "lib-verniz",
  "private": true,
  "packageManager": "yarn@1.22.19",
  "workspaces": [
    "packages/*",
    "apps/*",
    "shared/*"
  ]
}
```

### Estrutura de Workspaces

```
lib-verniz/
├── package.json          # Root
├── packages/
│   ├── components/
│   │   └── button/
│   │       └── package.json
│   ├── utils/
│   │   └── package.json
│   └── theme/
│       └── package.json
├── apps/
│   └── docs/
│       └── package.json
└── shared/
    ├── eslint-config/
    │   └── package.json
    └── typescript-config/
        └── package.json
```

## 📦 Dependências Internas

### Referenciando Workspaces

```json
// packages/components/button/package.json
{
  "name": "@verniz/button",
  "dependencies": {
    "@verniz/utils": "*",      // Workspace interno
    "@verniz/theme": "*"       // Workspace interno
  }
}
```

### Instalação

```bash
# Yarn resolve automaticamente
yarn install
```

## 🔗 Tipos de Dependências

### Dependencies

Dependências necessárias em runtime.

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "@verniz/utils": "*"
  }
}
```

### DevDependencies

Dependências apenas para desenvolvimento.

```json
{
  "devDependencies": {
    "typescript": "^5.4.5",
    "vitest": "^1.5.2"
  }
}
```

### PeerDependencies

Dependências que o consumidor deve fornecer.

```json
{
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}
```

## 🎯 Configuração por Tipo de Pacote

### Componente

```json
{
  "name": "@verniz/button",
  "version": "0.0.1",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "files": ["dist/**"],
  "dependencies": {
    "@verniz/utils": "*",
    "@verniz/theme": "*"
  },
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@verniz/eslint-config": "*",
    "@verniz/typescript-config": "*",
    "typescript": "^5.4.5",
    "vitest": "^1.5.2",
    "tsup": "^8.0.2"
  }
}
```

### Utilitário

```json
{
  "name": "@verniz/utils",
  "version": "0.0.1",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "files": ["dist/**"],
  "sideEffects": false,
  "devDependencies": {
    "typescript": "^5.4.5",
    "tsup": "^8.0.2"
  }
}
```

### Shared Config

```json
{
  "name": "@verniz/eslint-config",
  "version": "0.0.1",
  "main": "./index.js",
  "files": ["*.js"],
  "peerDependencies": {
    "eslint": "^8.57.0"
  }
}
```

## 🔄 Comandos Úteis

### Instalar Dependências

```bash
# Instala todas as dependências de todos os workspaces
yarn install

# Instala dependência em workspace específico
yarn workspace @verniz/button add react

# Instala dependência em todos os workspaces
yarn add -W -D typescript
```

### Executar Scripts

```bash
# Executa script em workspace específico
yarn workspace @verniz/button build

# Executa script em todos os workspaces (via Turborepo)
yarn build
```

### Adicionar Workspace

```bash
# Adiciona novo workspace
yarn workspace @verniz/new-component add @verniz/utils
```

## 📊 Resolução de Dependências

### Hierarquia

```
node_modules/              # Root
├── react/                 # Instalado uma vez
├── @verniz/
│   ├── button/           # Link simbólico
│   ├── utils/            # Link simbólico
│   └── theme/            # Link simbólico
└── ...
```

### Vantagens

- ✅ Sem duplicação de dependências
- ✅ Resolução unificada
- ✅ Builds mais rápidos
- ✅ Menos espaço em disco

## ⚠️ Boas Práticas

1. **Usar `*` para workspaces internos**: Facilita atualizações
2. **Peer dependencies para React**: Evita duplicação
3. **Side effects false**: Melhora tree-shaking
4. **Files field**: Controle o que é publicado
5. **Versionamento coordenado**: Usar Changesets

## 🚀 Próximos Passos

1. Configurar workspaces no `package.json`
2. Criar estrutura de pastas
3. Configurar dependências internas
4. Testar instalação

---

Yarn Workspaces são essenciais para o funcionamento eficiente do monorepo.

