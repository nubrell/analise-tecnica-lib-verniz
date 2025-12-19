# 📦 Guia Completo: Como Usar Changeset

O **Changeset** é uma ferramenta para gerenciar versionamento e changelogs em monorepos. Ele permite versionar e publicar múltiplos pacotes de forma coordenada.

---

## 🎯 Quando Usar Changeset vs Publicação Individual?

### Publicação Individual (tags)
- ✅ Para publicar **um único componente** rapidamente
- ✅ Quando você quer controle total sobre o momento da publicação
- ✅ Comando: `yarn publish:component nome-componente`

### Changeset (versão coordenada)
- ✅ Para publicar **múltiplos componentes** juntos
- ✅ Quando quer versionamento coordenado e CHANGELOGs automáticos
- ✅ Para releases planejadas com múltiplos pacotes
- ✅ Quando precisa de versionamento semântico coordenado entre dependências

---

## 📋 Fluxo Completo do Changeset

### 1. Criar um Changeset

Quando você faz mudanças em um ou mais componentes, crie um changeset:

```bash
cd lib-verniz-starter
yarn changeset
```

**Processo Interativo:**

1. **Seleciona os pacotes afetados** (pode selecionar múltiplos):
   ```
   ? Which packages would you like to include? …
   ❯◉ @nubrell/button
   ◯ @nubrell/badge
   ◯ @nubrell/nav
   ```

2. **Define o tipo de versão** para cada pacote:
   ```
   ? What kind of change is this for @nubrell/button? (Use arrow keys)
   ❯ patch (bug fix, pequenas mudanças)
     minor (nova feature, retrocompatível)
     major (breaking changes)
   ```

3. **Escreve uma descrição** da mudança:
   ```
   ? Please enter a summary for this change
   Adiciona suporte a ícones no componente Button
   ```

**Resultado:** Um arquivo `.changeset/[hash]-[descrição].md` é criado:

```markdown
---
"@nubrell/button": patch
---

Adiciona suporte a ícones no componente Button
```

### 2. Commit do Changeset

```bash
git add .changeset/
git commit -m "chore: add changeset for button icon support"
git push origin main
```

### 3. Versionar Pacotes

Quando você estiver pronto para fazer uma release, você (ou o responsável) executa:

```bash
cd lib-verniz-starter
yarn changeset:version
```

**O que acontece:**
- ✅ Lê todos os changesets pendentes
- ✅ Atualiza as versões nos `package.json` dos pacotes afetados
- ✅ Gera/atualiza os CHANGELOGs automaticamente
- ✅ Remove os arquivos `.changeset/` processados

**Exemplo de output:**
```
🦋  success Updated version for @nubrell/button: 0.0.1 -> 0.0.2
🦋  success Updated version for @nubrell/badge: 0.0.1 -> 0.0.2
📝  Updated CHANGELOGs for @nubrell/button, @nubrell/badge
```

### 4. Publicar Pacotes

Depois de versionar, publique os pacotes:

```bash
cd lib-verniz-starter
yarn changeset:publish
```

**O que acontece:**
- ✅ Publica todos os pacotes que tiveram versão atualizada
- ✅ Publica no GitHub Packages (conforme configurado)
- ✅ Cria tags Git automaticamente

---

## 🔄 Workflow Completo (Passo a Passo)

### Cenário: Você fez mudanças em 3 componentes

```bash
# 1. Você fez mudanças nos componentes
# - Corrigiu bug no button
# - Adicionou feature no badge  
# - Fez breaking change no nav

# 2. Criar changesets
cd lib-verniz-starter
yarn changeset

# Primeiro changeset (button - patch):
# ? Which packages? → @nubrell/button
# ? What kind of change? → patch
# ? Summary → Fix button disabled state

# Segundo changeset (badge - minor):
# ? Which packages? → @nubrell/badge
# ? What kind of change? → minor
# ? Summary → Add badge variants

# Terceiro changeset (nav - major):
# ? Which packages? → @nubrell/nav
# ? What kind of change? → major
# ? Summary → Refactor Nav API

# 3. Commit os changesets
git add .changeset/
git commit -m "chore: add changesets for button, badge, and nav"
git push origin main

# 4. (Responsável) Versionar
yarn changeset:version
# Atualiza versões: button 0.0.1→0.0.2, badge 0.0.1→0.1.0, nav 0.0.1→1.0.0

# 5. (Responsável) Publicar
yarn changeset:publish
# Publica todos os pacotes atualizados
```

---

## 📝 Estrutura de um Changeset

### Arquivo Changeset Individual

```markdown
---
"@nubrell/button": patch
"@nubrell/badge": patch
---

Adiciona suporte a ícones em componentes de UI
```

**Formato:**
- **Frontmatter (YAML)**: Define quais pacotes e tipo de versão
- **Corpo (Markdown)**: Descrição da mudança (aparece no CHANGELOG)

### Tipos de Versão

| Tipo | Quando Usar | Exemplo |
|------|-------------|---------|
| **patch** | Bug fixes, correções pequenas | `0.0.1 → 0.0.2` |
| **minor** | Novas features, retrocompatível | `0.0.1 → 0.1.0` |
| **major** | Breaking changes | `0.0.1 → 1.0.0` |

---

## 🎯 Diferenças: Changeset vs Publicação Individual

| Aspecto | Changeset | Publicação Individual (tags) |
|---------|-----------|------------------------------|
| **Quantidade** | Múltiplos pacotes | Um único pacote |
| **CHANGELOG** | Automático | Manual |
| **Coordenação** | Sim, coordena versões | Não |
| **Controle** | Menos controle (processo batch) | Controle total |
| **Uso** | Releases planejadas | Publicação rápida de um componente |
| **Comando** | `yarn changeset` → `yarn changeset:version` → `yarn changeset:publish` | `yarn publish:component nome` |

---

## ⚙️ Configuração Atual

O Changeset está configurado em `.changeset/config.json`:

```json
{
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "access": "public",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": ["docs"]
}
```

**O que significa:**
- `changelog`: Usa o gerador padrão de CHANGELOG
- `commit: false`: Não commita automaticamente (você commita manualmente)
- `access: public`: Pacotes são públicos (mas no GitHub Packages precisa ser `restricted`)
- `baseBranch: main`: Branch principal é `main`
- `updateInternalDependencies: patch`: Dependências internas atualizam como patch
- `ignore: ["docs"]`: Ignora o pacote `docs` no versionamento

---

## 📚 Comandos Disponíveis

### Criar Changeset

```bash
yarn changeset
```

Cria um novo arquivo changeset interativamente.

**Importante:** O Changeset só mostra pacotes que têm **mudanças detectadas** comparando com a branch base (`main`). 

**Se o pacote não aparecer na lista:**

1. **Fazer commit das mudanças primeiro:**
   ```bash
   git add packages/components/dropdown-menu/src/DropdownMenu.stories.tsx
   git commit -m "chore: update dropdown-menu stories"
   ```

2. **Ou criar changeset vazio e editar manualmente:**
   ```bash
   # Criar changeset vazio
   yarn changeset add --empty
   
   # Depois editar o arquivo criado em .changeset/ para adicionar:
   # ---
   # "@nubrell/dropdown-menu": patch
   # ---
   # Descrição da mudança
   ```

**Nota:** Mudanças em arquivos `.stories.tsx` podem não ser detectadas automaticamente porque esses arquivos não fazem parte do build publicado (não estão no campo `files` do `package.json`). Nesses casos, você precisa criar o changeset manualmente ou fazer commit primeiro.

### Versionar Pacotes

```bash
yarn changeset:version
```

Processa todos os changesets pendentes e atualiza versões/CHANGELOGs.

### Publicar Pacotes

```bash
yarn changeset:publish
```

Publica todos os pacotes que tiveram versão atualizada.

### Status (ver mudanças pendentes)

```bash
yarn changeset status
```

Mostra quais changesets estão pendentes de versionamento.

---

## 🔄 Exemplo Prático Completo

### Situação: Você fez uma correção no componente `button`

```bash
# 1. Você corrigiu o bug no código
# Editou: packages/components/button/src/Button.tsx

# 2. Criar changeset
cd lib-verniz-starter
yarn changeset

# Perguntas:
# ? Which packages? → @nubrell/button
# ? What kind of change? → patch (é um bug fix)
# ? Summary → Fix button onClick not firing when disabled

# 3. Arquivo criado: .changeset/abc123-fix-button.md

# 4. Commit
git add .changeset/abc123-fix-button.md
git commit -m "chore: add changeset for button fix"
git push origin main

# 5. (Quando estiver pronto para publicar)
# O responsável executa:
yarn changeset:version
# Atualiza: @nubrell/button 0.0.1 → 0.0.2
# Atualiza: packages/components/button/CHANGELOG.md

# 6. (Depois de revisar as mudanças)
# O responsável executa:
yarn changeset:publish
# Publica @nubrell/button@0.0.2 no GitHub Packages
```

---

## ✅ Boas Práticas

### 1. Sempre criar changeset para mudanças que afetam usuários

```bash
# ✅ Bom: Criar changeset
yarn changeset

# ❌ Ruim: Fazer mudança sem changeset
# (versão não será atualizada)
```

### 2. Descrições claras e concisas

```markdown
# ✅ Bom
Fix button disabled state not working correctly

# ❌ Ruim
fix
```

### 3. Agrupar mudanças relacionadas

```markdown
---
"@nubrell/button": minor
"@nubrell/input": minor
---

Add icon support to form components
```

### 4. Usar o tipo de versão correto

- **patch**: Bug fixes, correções
- **minor**: Novas features (retrocompatível)
- **major**: Breaking changes (mudanças que quebram compatibilidade)

---

## 🚨 Troubleshooting

### Problema: Pacote não aparece na lista do `yarn changeset`

**Causa:** O Changeset só mostra pacotes com mudanças detectadas comparando com a branch base.

**Solução 1: Fazer commit primeiro**
```bash
# 1. Fazer commit das mudanças
git add packages/components/dropdown-menu/
git commit -m "feat: update dropdown-menu"

# 2. Agora executar changeset
yarn changeset
# O pacote deve aparecer na lista
```

**Solução 2: Criar changeset vazio e editar manualmente**
```bash
# 1. Criar changeset vazio
yarn changeset add --empty

# 2. Editar o arquivo criado em .changeset/[hash]-[nome].md
# Adicionar o pacote manualmente:
# ---
# "@nubrell/dropdown-menu": patch
# ---
# Descrição da mudança aqui
```

**Solução 3: Verificar se o pacote está sendo rastreado**
```bash
# Verificar mudanças não commitadas
git status

# Verificar se há diferenças com a branch base
git diff main --name-only | grep dropdown-menu
```

**Nota sobre arquivos `.stories.tsx`:**
- Mudanças em stories podem não ser detectadas automaticamente
- Esses arquivos não fazem parte do build publicado
- Faça commit primeiro ou crie o changeset manualmente

### Problema: Changesets não aparecem ao executar `yarn changeset:version`

**Solução:**
```bash
# Verificar se há arquivos changeset
ls -la .changeset/*.md

# Verificar status
yarn changeset status
```

### Problema: Versão não atualizou

**Solução:**
```bash
# Verificar se o changeset foi processado
# Arquivos changeset devem ser removidos após versionar
ls .changeset/*.md

# Executar version novamente
yarn changeset:version
```

### Problema: Changeset mostra pacotes `@verniz/*` em vez de `@nubrell/*`

**Causa:** Existem pacotes antigos com nome `@verniz/*` no workspace (ex: `@verniz/theme`, `@verniz/typescript-config`).

**Solução:**
- Isso é normal se esses pacotes existirem no workspace
- Os pacotes `@nubrell/*` aparecerão quando tiverem mudanças detectadas
- Você pode criar changeset para qualquer pacote que aparecer na lista
- Se precisar criar para um pacote que não aparece, use `yarn changeset add --empty` e edite manualmente

### Problema: Dependências internas não atualizaram

**Solução:**
- Verificar configuração `updateInternalDependencies` no `.changeset/config.json`
- Se for `patch`, dependências só atualizam como patch

---

## 📖 Resumo Rápido

```bash
# 1. Fazer mudanças no código
# 2. Criar changeset
yarn changeset

# 3. Commit
git add .changeset/
git commit -m "chore: add changeset"
git push origin main

# 4. (Responsável) Versionar
yarn changeset:version

# 5. (Responsável) Publicar
yarn changeset:publish
```

---

**Lembre-se:** O Changeset é ideal para releases coordenadas com múltiplos pacotes. Para publicação rápida de um único componente, use `yarn publish:component`.

