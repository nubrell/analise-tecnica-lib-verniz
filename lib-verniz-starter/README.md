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

### Documentação de Publicação

- **[FLUXO-COMPLETO-CHANGESET.md](./FLUXO-COMPLETO-CHANGESET.md)**: Fluxo completo com Changeset (recomendado)
- **[GUIA-COMPLETO-CRIAR-BUILD-PUBLICAR.md](./GUIA-COMPLETO-CRIAR-BUILD-PUBLICAR.md)**: Guia para publicação individual de componentes

### Resumo Rápido

**Fluxo com Changeset (recomendado):**
1. Criar branch do componente
2. Criar/editar componente
3. Executar `yarn changeset`
4. Commit do componente + changeset
5. Criar PR para `main`
6. Merge do PR → Workflow cria Release PR automaticamente
7. Merge do Release PR → Pacotes são publicados automaticamente

**Publicação Individual (rápida):**
```bash
yarn publish:component nome-componente
```

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
