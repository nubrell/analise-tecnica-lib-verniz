# Setup Inicial - Biblioteca Verniz

## 📋 Passo a Passo

### 1. Criar Repositório

```bash
mkdir lib-verniz
cd lib-verniz
git init
```

### 2. Inicializar Yarn Workspaces

```bash
yarn init -w
```

### 3. Instalar Dependências Base

```bash
yarn add -D -W \
  turbo@^2.0.4 \
  @changesets/cli@^2.27.1 \
  hygen@^6.2.11 \
  typescript@^5.4.5
```

### 4. Criar Estrutura de Pastas

```bash
mkdir -p packages/components
mkdir -p packages/utils
mkdir -p packages/theme
mkdir -p apps/docs
mkdir -p shared/eslint-config
mkdir -p shared/typescript-config
mkdir -p _templates/component/web
```

### 5. Configurar Turborepo

```json
// turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "outputs": ["dist/**"],
      "dependsOn": ["^build"]
    },
    "test": { "cache": false },
    "lint": { "cache": false }
  }
}
```

### 6. Configurar Changesets

```bash
yarn changeset init
```

### 7. Instalar Dependências

```bash
yarn install
```

## ✅ Checklist

- [ ] Repositório criado
- [ ] Yarn workspaces configurado
- [ ] Dependências instaladas
- [ ] Estrutura de pastas criada
- [ ] Turborepo configurado
- [ ] Changesets inicializado

---

Setup inicial completo prepara o ambiente para desenvolvimento.

