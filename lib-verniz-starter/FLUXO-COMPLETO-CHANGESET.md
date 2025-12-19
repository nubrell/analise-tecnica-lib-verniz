# 🔄 Fluxo Completo: Criar Componente e Publicar com Changeset

Este guia descreve o fluxo completo desde a criação de um componente até sua publicação, seguindo o processo automatizado com Changeset.

---

## 📋 Fluxo Passo a Passo

### 1. Criar Branch do Componente

```bash
# Na raiz do repositório
cd /Users/wellington.bezerra/Documents/Repos/analise-tecnica-lib-verniz

# Criar branch para o componente
git checkout -b feat/dropdown-menu-fixes
# ou
git checkout -b fix/dropdown-menu-bug
# ou
git checkout -b chore/dropdown-menu-update
```

**Convenção de nomes de branch:**

- `feat/` - Nova feature/componente
- `fix/` - Correção de bug
- `chore/` - Atualização/manutenção

---

### 2. Criar/Editar o Componente

```bash
# Navegar para lib-verniz-starter
cd lib-verniz-starter

# Criar novo componente (se necessário)
yarn component
# Escolha: web ou compound
# Siga as instruções interativas

# Ou editar componente existente
vim packages/components/dropdown-menu/src/DropdownMenu.tsx
```

**Exemplo:** Você edita o `DropdownMenu.tsx` e faz suas mudanças.

---

### 3. Criar Changeset

```bash
# Ainda em lib-verniz-starter
yarn changeset
```

**Processo interativo:**

1. **Seleciona os pacotes afetados:**

   - Use **espaço** para marcar/desmarcar
   - **Enter** para confirmar
   - Você verá `@nubrell/dropdown-menu` na lista (se tiver mudanças detectadas)

2. **Define o tipo de versão:**

   - `patch` - Bug fix, correção pequena (0.0.1 → 0.0.2)
   - `minor` - Nova feature retrocompatível (0.0.1 → 0.1.0)
   - `major` - Breaking change (0.0.1 → 1.0.0)

3. **Escreve descrição:**
   - Exemplo: "Fix radio icon in DropdownMenu"
   - Esta descrição aparecerá no CHANGELOG

**Resultado:** Arquivo `.changeset/[hash]-[descrição].md` criado em `lib-verniz-starter/.changeset/`

---

### 4. Commit do Componente e Changeset

```bash
# Adicionar mudanças do componente
git add lib-verniz-starter/packages/components/dropdown-menu/

# Adicionar changeset
git add lib-verniz-starter/.changeset/

# Commit
git commit -m "fix: corrige ícone de radio no DropdownMenu"
```

**Ou tudo de uma vez:**

```bash
git add lib-verniz-starter/
git commit -m "fix: corrige ícone de radio no DropdownMenu"
```

---

### 5. Push e Criar PR

```bash
# Push da branch
git push origin feat/dropdown-menu-fixes

# Criar PR no GitHub (ou use o link que aparece no terminal)
# Vá para: https://github.com/nubrell/analise-tecnica-lib-verniz/pulls
# Clique em "New Pull Request"
# Selecione: base: main ← compare: feat/dropdown-menu-fixes
```

**Ou use o GitHub CLI:**

```bash
gh pr create --base main --head feat/dropdown-menu-fixes --title "fix: corrige ícone de radio no DropdownMenu" --body "Corrige o ícone de radio no componente DropdownMenu"
```

---

### 6. Revisar e Aprovar PR

1. **Revisar o PR no GitHub:**

   - Verifique as mudanças
   - Verifique se o changeset está incluído
   - Peça review se necessário

2. **Aprovar e fazer merge:**
   - Clique em "Merge pull request"
   - Ou use "Squash and merge" / "Rebase and merge"

---

### 7. Action Automática Publica o Componente

Após o merge do PR para `main`, o workflow `release.yml` executa automaticamente:

1. **Detecta changesets** em `lib-verniz-starter/.changeset/`
2. **Versiona pacotes:**
   - Atualiza versões nos `package.json`
   - Gera/atualiza CHANGELOGs
   - Remove changesets processados
   - Commita e faz push das mudanças para `main`
3. **Build e Publica:**
   - Faz build dos pacotes
   - Publica no GitHub Packages automaticamente
4. **Exclui a branch do componente** (se configurado)

---

## 🎯 Exemplo Completo Prático

```bash
# 1. Criar branch
git checkout -b feat/dropdown-menu-fixes

# 2. Editar componente
cd lib-verniz-starter
vim packages/components/dropdown-menu/src/DropdownMenu.tsx
# Faz suas mudanças...

# 3. Criar changeset
yarn changeset
# Seleciona: @nubrell/dropdown-menu
# Tipo: patch
# Descrição: Fix radio icon in DropdownMenu

# 4. Commit
git add lib-verniz-starter/
git commit -m "fix: corrige ícone de radio no DropdownMenu"
git push origin feat/dropdown-menu-fixes

# 5. Criar PR no GitHub (via interface web ou gh cli)
gh pr create --base main --head feat/dropdown-menu-fixes --title "fix: corrige ícone de radio no DropdownMenu"

# 6. Revisar e fazer merge do PR

# 7. O workflow automaticamente:
#    - Detecta changeset
#    - Versiona pacotes (atualiza versões e CHANGELOGs)
#    - Faz build dos pacotes
#    - Publica no GitHub Packages
#    - Tudo acontece automaticamente após o merge! ✅
```

---

## 📝 Checklist do Fluxo

- [ ] 1. Criar branch do componente (`feat/`, `fix/`, `chore/`)
- [ ] 2. Criar/editar componente
- [ ] 3. Executar `yarn changeset` e preencher informações
- [ ] 4. Commit do componente + changeset
- [ ] 5. Push e criar PR para `main`
- [ ] 6. Revisar e fazer merge do PR
- [ ] 7. Workflow detecta changeset e versiona automaticamente
- [ ] 8. Workflow faz build e publica pacotes automaticamente

---

## ⚠️ Importante

- **Sempre crie changeset** quando fizer mudanças que precisam ser versionadas
- **Não commite código sem changeset** se for uma mudança que afeta usuários
- **Após o merge na main, o workflow processa tudo automaticamente** (versionamento, build e publicação)

---

## 🔍 Verificar Status

```bash
# Ver changesets pendentes
cd lib-verniz-starter
yarn changeset status

# Ver mudanças não commitadas
git status

# Ver diferenças com main
git diff main --name-only
```

---

Este fluxo garante versionamento semântico, CHANGELOGs automáticos e publicação coordenada de pacotes! 🚀
