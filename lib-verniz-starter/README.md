# lib-verniz-starter

Template completo e funcional para criar uma biblioteca de componentes React baseada em shadcn/ui e Tailwind CSS.

## 🚀 Começando

### Pré-requisitos

- Node.js 20
- Yarn 1.22.19
- Git

### Instalação

```bash
# 0. Usar Node 20 (se estiver usando nvm)
nvm use

# 1. Instalar dependências (workspaces removidos temporariamente para evitar erros)
yarn install

# 2. Build dos packages base (opcional, mas recomendado)
yarn build

# 3. Iniciar Storybook
yarn dev
```

**Nota sobre Workspaces**: Para evitar problemas com Yarn Classic, as dependências entre workspaces foram temporariamente removidas. O Storybook usa aliases do Vite para resolver os imports.

## 📁 Estrutura do Projeto

```
lib-verniz-starter/
├── packages/
│   ├── components/          # Componentes React
│   │   └── button/          # Exemplo: Button component
│   ├── utils/               # Utilitários compartilhados
│   └── theme/               # Design tokens e tema
├── apps/
│   └── docs/                # Storybook
├── shared/
│   ├── eslint-config/       # Configurações ESLint
│   └── typescript-config/   # Configurações TypeScript
└── _templates/              # Templates Hygen
```

## 🛠️ Comandos Disponíveis

### Build

```bash
yarn build                  # Build todos os pacotes
```

### Testes

```bash
yarn test                   # Executar todos os testes
```

### Lint

```bash
yarn lint                   # Executar lint em todos os pacotes
```

### Desenvolvimento

```bash
yarn dev                    # Iniciar Storybook na porta 6006
```

### Versionamento

```bash
yarn changeset              # Criar novo changeset
```

### Gerar Componente

```bash
yarn component              # Gerar novo componente usando Hygen
```

## 📦 Pacotes

### @verniz/utils

Utilitários compartilhados, incluindo a função `cn()` para merge de classes Tailwind.

### @verniz/theme

Design tokens e configuração do tema Tailwind CSS.

### @verniz/button

Componente Button de exemplo com variantes e tamanhos.

## 🎨 Criando Novos Componentes

Use o Hygen para gerar a estrutura completa de um novo componente:

```bash
yarn component
```

Isso criará:

- Componente React com TypeScript
- Estilos com CVA (Class Variance Authority)
- Testes com Vitest
- Stories do Storybook
- Configurações de build e TypeScript

## 📚 Documentação

Execute `yarn dev` para abrir o Storybook e ver a documentação interativa dos componentes.

## 🔄 Versionamento e Release

Este projeto usa [Changesets](https://github.com/changesets/changesets) para gerenciamento de versões e GitHub Actions para publicar packages.

### Publicação Automática via GitHub Actions

Os packages são publicados automaticamente para o GitHub Packages (organização `@nubrell`) usando GitHub Actions:

1. **Publicação Automática**: Ao fazer push na branch `main`, todos os packages são publicados
2. **Publicação Manual de um Package**: 
   - Vá para Actions → "Publish Single Package"
   - Clique em "Run workflow"
   - Informe o caminho do package (ex: `packages/components/button`)
   - Clique em "Run workflow"

### Publicação Manual Local

Para publicar manualmente localmente:

1. Incremente a versão no `package.json` do componente
2. Faça build: `yarn build` (ou dentro do package: `cd packages/components/button && yarn build`)
3. Publique: `cd packages/components/button && npm publish`

**Nota**: Para publicação local, você precisa configurar um token do GitHub no `.npmrc`. Para publicação via GitHub Actions, o `GITHUB_TOKEN` é usado automaticamente.

## 🏗️ Stack Tecnológica

- **Monorepo**: Turborepo + Yarn Workspaces
- **Build**: TSUP
- **Versionamento**: Changesets
- **Templates**: Hygen
- **Documentação**: Storybook
- **Testes**: Vitest
- **Estilos**: Tailwind CSS + CVA
- **Componentes**: shadcn/ui pattern
- **CI/CD**: GitHub Actions

## 📝 Próximos Passos

1. Customize os design tokens em `packages/theme/`
2. Crie novos componentes usando `yarn component`
3. Configure o registry npm (GitHub Packages, npm, etc.)
4. Customize os workflows do GitHub Actions conforme necessário
