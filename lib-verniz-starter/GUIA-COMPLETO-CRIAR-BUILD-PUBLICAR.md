# 🚀 Guia Completo: Criar, Buildar e Publicar Componentes

Este guia documenta o processo completo para criar, desenvolver, buildar e publicar componentes na biblioteca `@nubrell/*`, incluindo todos os comandos exatos necessários.

---

## 📋 Índice

1. [Criar um Novo Componente](#1-criar-um-novo-componente)
   - [1.1. Criar Componente Web (Simples)](#11-criar-componente-web-simples)
   - [1.2. Criar Componente Compound (Composto)](#12-criar-componente-compound-composto)
   - [1.3. Diferenças entre Web e Compound](#13-diferenças-entre-web-e-compound)
2. [Desenvolver e Testar Localmente](#2-desenvolver-e-testar-localmente)
3. [Atualizar Versão do Componente](#3-atualizar-versão-do-componente)
4. [Publicar Componente Individual](#4-publicar-componente-individual)
5. [Publicar Todos os Pacotes](#5-publicar-todos-os-pacotes)
6. [Troubleshooting](#6-troubleshooting)
7. [Exemplo Completo: Criar e Publicar um Componente Compound](#-exemplo-completo-criar-e-publicar-um-componente-compound)

---

## 1. Criar um Novo Componente

### Pré-requisitos

- Node.js 20 (ou superior)
- Yarn 1.22.19
- Estar na raiz do projeto `lib-verniz-starter`

### 1.1. Criar Componente Web (Simples)

Componentes simples como `button`, `badge`, `card`, etc.

```bash
# 1. Navegar para a raiz do projeto lib-verniz-starter
cd lib-verniz-starter

# 2. Garantir que está usando Node 20 (se usar nvm)
nvm use

# 3. Executar o gerador de componentes
yarn component
```

**Passos Interativos:**

Quando executar `yarn component`, você será solicitado:

1. **Tipo de componente**: Digite `web` ou `compound` (padrão: `web`)

   - `web`: Componente simples (ex: `button`, `badge`, `card`)
   - `compound`: Componente composto com subcomponentes (ex: `nav`, `table`, `sidebar`)

2. **Nome do componente principal**: Digite o nome em **kebab-case**

   - ✅ Exemplos válidos: `button`, `badge`, `nav`, `table`, `sidebar`
   - ❌ Exemplos inválidos: `Button`, `nav_group`, `NavGroup`

3. **Se escolheu `compound`**: Digite a lista de sub-componentes separados por vírgulas
   - ✅ Exemplos válidos: `NavGroup, NavItem, NavHeader` ou `TableHeader, TableBody, TableRow`
   - Os nomes podem estar em PascalCase ou kebab-case (serão convertidos automaticamente)

**Exemplo completo para criar um componente `web` (simples):**

```bash
yarn component
# Pergunta 1: Qual o tipo de componente? (web/compound) [web]: → [Enter] ou web
# Pergunta 2: What is the component name? → button
```

**Exemplo completo para criar um componente `compound` (composto):**

```bash
yarn component
# Pergunta 1: Qual o tipo de componente? (web/compound) [web]: → compound
# Pergunta 2: What is the main component name? → nav
# Pergunta 3: List sub-components separated by commas → NavGroup, NavItem, NavCollapsibleItem
```

### Estrutura Gerada

#### Componente Web (Simples)

```
packages/components/seu-componente/
├── src/
│   ├── SeuComponente.tsx           # Componente principal
│   ├── SeuComponente.styles.ts     # Estilos com CVA
│   ├── SeuComponente.spec.tsx      # Testes unitários
│   ├── SeuComponente.stories.tsx   # Stories do Storybook
│   ├── cn.ts                        # Helper para className
│   ├── test-setup.ts               # Configuração de testes
│   └── index.tsx                   # Export do componente
├── package.json                     # Configuração do pacote
├── tsconfig.json                   # Configuração TypeScript
├── tsup.config.ts                  # Configuração de build
└── vitest.config.ts                # Configuração de testes
```

#### Componente Compound (Composto)

```
packages/components/seu-componente/
├── src/
│   ├── SeuComponente/
│   │   ├── SeuComponente.tsx       # Componente principal
│   │   └── SeuComponente.styles.ts # Estilos do componente principal
│   ├── SubComponente1/
│   │   ├── SubComponente1.tsx
│   │   └── SubComponente1.styles.ts
│   ├── SubComponente2/
│   │   ├── SubComponente2.tsx
│   │   └── SubComponente2.styles.ts
│   ├── SeuComponenteContext.tsx    # Context para compartilhar estado
│   ├── types.ts                     # Tipos compartilhados
│   ├── cn.ts                        # Helper para className
│   ├── test-setup.ts               # Configuração de testes
│   ├── SeuComponente.spec.tsx      # Testes unitários
│   ├── SeuComponente.stories.tsx   # Stories do Storybook
│   └── index.tsx                   # Export de todos os componentes
├── package.json                     # Configuração do pacote
├── tsconfig.json                   # Configuração TypeScript
├── tsup.config.ts                  # Configuração de build
└── vitest.config.ts                # Configuração de testes
```

---

## 1.3. Diferenças entre Web e Compound

| Aspecto         | Web (Simples)                     | Compound (Composto)                                  |
| --------------- | --------------------------------- | ---------------------------------------------------- |
| **Quando usar** | Componente único, auto-contido    | Componente com múltiplos subcomponentes relacionados |
| **Exemplos**    | `button`, `badge`, `card`         | `nav`, `table`, `dropdown-menu`                      |
| **Estrutura**   | Um único arquivo de componente    | Múltiplos subcomponentes em pastas separadas         |
| **Context**     | Não usa                           | Geralmente usa Context API para compartilhar estado  |
| **Exports**     | Exporta um componente             | Exporta múltiplos componentes e tipos                |
| **Comando**     | `yarn component` (escolher `web`) | `yarn component` (escolher `compound`)               |

---

## 2. Desenvolver e Testar Localmente

### Estrutura de Arquivos Principais

Edite os arquivos em `packages/components/seu-componente/src/`:

- **`SeuComponente.tsx`**: Lógica e estrutura do componente
- **`SeuComponente.styles.ts`**: Variantes de estilo usando CVA
- **`SeuComponente.spec.tsx`**: Testes unitários com Vitest
- **`SeuComponente.stories.tsx`**: Documentação e exemplos no Storybook

### Build Local

```bash
# 1. Navegar para o diretório do componente
cd lib-verniz-starter/packages/components/seu-componente

# 2. Executar build
yarn build
```

**Output esperado:**

```
dist/
├── index.cjs          # CommonJS
├── index.cjs.map      # Sourcemap CJS
├── index.mjs          # ES Module
├── index.mjs.map      # Sourcemap ESM
├── index.d.ts         # TypeScript definitions
└── index.d.mts        # TypeScript definitions (ESM)
```

### Executar Testes

```bash
# Executar testes uma vez
yarn test

# Executar testes em modo watch
yarn test:watch
```

### Visualizar no Storybook

```bash
# 1. Voltar para a raiz do lib-verniz-starter
cd lib-verniz-starter

# 2. Iniciar Storybook
yarn dev
```

O Storybook estará disponível em: `http://localhost:6006`

### Lint

```bash
# Executar lint no componente
cd lib-verniz-starter/packages/components/seu-componente
yarn lint
```

---

## 3. Atualizar Versão do Componente

### Editar package.json

```bash
# Navegar para o componente
cd lib-verniz-starter/packages/components/seu-componente

# Editar a versão no package.json manualmente
# Ou usar npm/yarn version (não recomendado para workspaces)
```

**Formato de versão (SemVer):**

- `0.0.1` - Patch (correções)
- `0.1.0` - Minor (novas funcionalidades, retrocompatível)
- `1.0.0` - Major (breaking changes)

**Exemplo:**

```json
{
  "name": "@nubrell/seu-componente",
  "version": "0.1.0" // Atualizar aqui
}
```

### Commit das Mudanças

```bash
# 1. Voltar para a raiz do repositório
cd /caminho/para/analise-tecnica-lib-verniz

# 2. Adicionar mudanças
git add lib-verniz-starter/packages/components/seu-componente/package.json

# 3. Commit
git commit -m "chore: bump @nubrell/seu-componente to 0.1.0"

# 4. Push
git push origin main
```

---

## 4. Publicar Componente Individual

> **⚠️ Importante:** O processo de publicação é **idêntico** para componentes Web e Compound. A diferença está apenas na criação do componente. Use os comandos abaixo para qualquer tipo de componente.

### Opção 1: Script Automatizado (Recomendado) 🚀

O script detecta automaticamente a versão do `package.json`:

```bash
# 1. Navegar para a raiz do repositório
cd /caminho/para/analise-tecnica-lib-verniz

# 2. Executar script de publicação
cd lib-verniz-starter
yarn publish:component nome-do-componente
```

**Exemplo:**

```bash
yarn publish:component nav
# Cria tag: nubrell/nav@0.0.4 (pega versão do package.json)
# Faz push da tag automaticamente
# Aciona workflow no GitHub Actions
```

### Opção 2: Manual (Via Tag Git)

```bash
# 1. Navegar para a raiz do repositório
cd /caminho/para/analise-tecnica-lib-verniz

# 2. Verificar versão no package.json do componente
cat lib-verniz-starter/packages/components/nome-do-componente/package.json | grep version

# 3. Criar tag no formato: nubrell/nome-do-componente@versao
git tag nubrell/nome-do-componente@0.0.1

# 4. Fazer push da tag (isso aciona o workflow automaticamente)
git push origin nubrell/nome-do-componente@0.0.1
```

**Formato da tag:**

```
nubrell/nome-do-componente@versao
```

**Exemplos:**

- `nubrell/button@0.0.1`
- `nubrell/nav@0.0.4`
- `nubrell/dropdown-menu@1.2.0`

### Opção 3: Via GitHub Actions UI

1. Acesse: https://github.com/nubrell/analise-tecnica-lib-verniz/actions
2. Selecione o workflow **"Publish Single Package"**
3. Clique em **"Run workflow"**
4. Preencha o campo `package_path`:
   ```
   packages/components/nome-do-componente
   ```
5. Clique em **"Run workflow"**

### O que acontece no Workflow

O workflow `publish-single.yml` executa:

1. ✅ Instala dependências
2. ✅ Cria links simbólicos dos workspaces (@nubrell/\*)
3. ✅ Builda dependências internas primeiro (se necessário, ex: nav precisa de badge, collapsible, dropdown-menu)
4. ✅ Builda o componente
5. ✅ Publica no GitHub Packages
6. ✅ Cria tag Git (se workflow_dispatch manual)

### Verificar Publicação

1. Acompanhe o workflow:

   ```
   https://github.com/nubrell/analise-tecnica-lib-verniz/actions
   ```

2. Quando concluído com sucesso ✅, o pacote estará em:

   ```
   https://github.com/orgs/nubrell/packages
   ```

3. Instalar em outro projeto:
   ```bash
   npm install @nubrell/nome-do-componente
   # ou
   yarn add @nubrell/nome-do-componente
   ```

---

## 5. Publicar Todos os Pacotes

### Via Tag de Versão

```bash
# 1. Navegar para a raiz do repositório
cd /caminho/para/analise-tecnica-lib-verniz

# 2. Criar tag de versão no formato: v1.0.0
git tag v1.0.0

# 3. Fazer push da tag
git push origin v1.0.0
```

**Formato da tag:**

```
vX.Y.Z
```

**Exemplos:**

- `v1.0.0`
- `v0.1.0`
- `v2.5.3`

### Via GitHub Actions UI

1. Acesse: https://github.com/nubrell/analise-tecnica-lib-verniz/actions
2. Selecione o workflow **"Publish Packages"**
3. Clique em **"Run workflow"**
4. Clique em **"Run workflow"** novamente

### O que acontece no Workflow

O workflow `publish.yml` executa:

1. ✅ Instala todas as dependências
2. ✅ Cria links simbólicos de todos os workspaces
3. ✅ Builda todos os pacotes @nubrell/\* em ordem de dependências
4. ✅ Publica todos os pacotes no GitHub Packages

---

## 6. Troubleshooting

### ❌ Erro: "Cannot find module '@nubrell/...'"

**Causa:** Dependências internas não foram buildadas antes.

**Solução para componente com dependências internas (ex: nav):**

O workflow `publish-single.yml` já trata isso automaticamente buildando as dependências primeiro. Se ocorrer erro:

1. Verifique se os pacotes dependentes existem em `packages/components/`
2. Certifique-se de que os links simbólicos foram criados em `node_modules/@nubrell/`
3. Verifique se os pacotes dependentes têm `dist/index.d.ts` (tipos gerados)

### ❌ Erro: "Package already published"

**Causa:** A versão já foi publicada no GitHub Packages.

**Solução:**

```bash
# Atualizar a versão no package.json
# Exemplo: de 0.0.1 para 0.0.2
vim lib-verniz-starter/packages/components/nome-do-componente/package.json

# Commit da mudança
git add lib-verniz-starter/packages/components/nome-do-componente/package.json
git commit -m "chore: bump version to 0.0.2"
git push origin main

# Publicar com nova versão
yarn publish:component nome-do-componente
```

### ❌ Erro: "Build failed - no output files found"

**Causa:** O build não gerou os arquivos esperados.

**Solução:**

```bash
# 1. Testar build localmente
cd lib-verniz-starter/packages/components/nome-do-componente
yarn build

# 2. Verificar se dist/ foi criado
ls -la dist/

# 3. Verificar erros no build
yarn build 2>&1 | tee build.log
```

### ❌ Erro: "Tag already exists"

**Causa:** A tag Git já existe localmente.

**Solução:**

```bash
# Opção 1: Deletar tag local e criar nova
git tag -d nubrell/nome-do-componente@0.0.1
git tag nubrell/nome-do-componente@0.0.2
git push origin nubrell/nome-do-componente@0.0.2

# Opção 2: Usar versão diferente
git tag nubrell/nome-do-componente@0.0.2
git push origin nubrell/nome-do-componente@0.0.2
```

### ❌ Erro: "Cannot find module 'vitest'"

**Causa:** Dependências não instaladas.

**Solução:**

```bash
cd lib-verniz-starter
yarn install
```

### ❌ Workflow não é acionado ao fazer push da tag

**Causa:** Tag não segue o padrão correto ou não foi feito push.

**Solução:**

1. Verifique o formato da tag:

   - ✅ `nubrell/componente@0.0.1` (para publish-single)
   - ✅ `v1.0.0` (para publish all)
   - ❌ `componente@0.0.1` (faltando prefixo)
   - ❌ `nubrell-componente-0.0.1` (formato incorreto)

2. Certifique-se de fazer push da tag:

   ```bash
   git push origin nubrell/componente@0.0.1
   ```

3. Verifique se a tag foi criada remotamente:
   ```bash
   git ls-remote --tags origin | grep nubrell/componente
   ```

### ❌ TypeScript não encontra tipos de dependências internas

**Causa:** Paths no tsconfig.json incorretos ou links não criados.

**Solução:**

Verifique o `tsconfig.json` do componente:

```json
{
  "compilerOptions": {
    "paths": {
      "@nubrell/badge": ["../../../node_modules/@nubrell/badge"],
      "@nubrell/collapsible": ["../../../node_modules/@nubrell/collapsible"],
      "@nubrell/dropdown-menu": ["../../../node_modules/@nubrell/dropdown-menu"]
    }
  }
}
```

O caminho deve subir 3 níveis: `../../../node_modules/@nubrell/...`

---

## 📝 Checklist de Publicação

Antes de publicar, verifique:

- [ ] Componente foi testado localmente (`yarn test`)
- [ ] Build funciona localmente (`yarn build`)
- [ ] Versão atualizada no `package.json`
- [ ] Commit e push das mudanças feitos
- [ ] Tag criada no formato correto
- [ ] Push da tag realizado
- [ ] Workflow executado com sucesso no GitHub Actions

---

## 🔗 Links Úteis

- **GitHub Actions**: https://github.com/nubrell/analise-tecnica-lib-verniz/actions
- **GitHub Packages**: https://github.com/orgs/nubrell/packages
- **Workflow Single Package**: `.github/workflows/publish-single.yml`
- **Workflow All Packages**: `.github/workflows/publish.yml`
- **Script de Publicação**: `lib-verniz-starter/scripts/publish.sh`

---

## 📚 Comandos Rápidos de Referência

```bash
# Criar componente (pergunta o tipo: web ou compound)
cd lib-verniz-starter && yarn component

# Build local
cd lib-verniz-starter/packages/components/nome-componente && yarn build

# Testes
cd lib-verniz-starter/packages/components/nome-componente && yarn test

# Storybook
cd lib-verniz-starter && yarn dev

# Publicar componente (automático)
cd lib-verniz-starter && yarn publish:component nome-componente

# Publicar componente (manual)
git tag nubrell/nome-componente@0.0.1
git push origin nubrell/nome-componente@0.0.1

# Publicar todos (via tag)
git tag v1.0.0
git push origin v1.0.0
```

---

## 🎯 Exemplo Completo: Criar e Publicar um Componente Compound

Vamos criar um componente `sidebar` com subcomponentes `SidebarHeader`, `SidebarContent`, `SidebarFooter`:

### Passo 1: Criar o Componente

```bash
cd lib-verniz-starter
yarn component
# Pergunta 1: Qual o tipo de componente? (web/compound) [web]: → compound
# Pergunta 2: What is the main component name? → sidebar
# Pergunta 3: List sub-components separated by commas → SidebarHeader, SidebarContent, SidebarFooter
```

### Passo 2: Desenvolver

Edite os arquivos gerados em `packages/components/sidebar/src/`:

- `Sidebar/Sidebar.tsx` - Componente principal
- `SidebarHeader/SidebarHeader.tsx` - Subcomponente header
- `SidebarContent/SidebarContent.tsx` - Subcomponente content
- `SidebarFooter/SidebarFooter.tsx` - Subcomponente footer
- `SidebarContext.tsx` - Context para compartilhar estado (se necessário)
- `types.ts` - Tipos compartilhados

### Passo 3: Testar Localmente

```bash
cd lib-verniz-starter/packages/components/sidebar
yarn build
yarn test
```

### Passo 4: Commit

```bash
cd /caminho/para/analise-tecnica-lib-verniz
git add lib-verniz-starter/packages/components/sidebar
git commit -m "feat: add sidebar component"
git push origin main
```

### Passo 5: Publicar

```bash
cd lib-verniz-starter
yarn publish:component sidebar
# Isso cria a tag: nubrell/sidebar@0.0.1
# E aciona o workflow automaticamente
```

### Passo 6: Usar o Componente Publicado

```bash
# Em outro projeto
npm install @nubrell/sidebar

# No código
import { Sidebar, SidebarHeader, SidebarContent, SidebarFooter } from '@nubrell/sidebar';
```

---

**Última atualização**: Baseado no workflow funcionando de `publish-single.yml` e `publish.yml`.
