# 📦 Fluxo de Publicação com Changeset

Este projeto usa **Changeset** para gerenciar versionamento e publicação de pacotes, seguindo o mesmo fluxo do `lib-cavilha-v2`.

## 🔄 Fluxo Completo

### 1. Fazer Mudanças no Código

Edite os arquivos dos componentes/pacotes que deseja versionar:

```bash
# Exemplo: Editar um componente
vim packages/components/dropdown-menu/src/DropdownMenu.tsx
```

### 2. Criar Changeset

Execute o comando para criar um changeset:

```bash
cd lib-verniz-starter
yarn changeset
```

**Processo interativo:**
1. **Seleciona os pacotes afetados** (use espaço para marcar, Enter para confirmar)
2. **Define o tipo de versão** para cada pacote:
   - `patch`: Correções/bug fixes (0.0.1 → 0.0.2)
   - `minor`: Novas features retrocompatíveis (0.0.1 → 0.1.0)
   - `major`: Breaking changes (0.0.1 → 1.0.0)
3. **Escreve uma descrição** da mudança

**Resultado:** Um arquivo `.changeset/[hash]-[descrição].md` é criado.

### 3. Commit e Push

```bash
git add .changeset/
git add packages/components/dropdown-menu/  # Seu código alterado
git commit -m "feat: atualiza dropdown-menu"
git push origin main
```

### 4. CI/CD Processa Automaticamente

Quando você faz push para `main`, o workflow `release.yml` é acionado:

1. **Detecta changesets pendentes**
2. **Cria um Release PR** automaticamente com:
   - Atualização de versões nos `package.json`
   - Atualização/geração de CHANGELOGs
   - Commit das mudanças

### 5. Revisar e Fazer Merge do Release PR

1. Acesse o PR criado no GitHub
2. Revise as mudanças (versões e CHANGELOGs)
3. Faça merge do PR

### 6. Publicação Automática

Após o merge do Release PR, o workflow automaticamente:
- Faz build dos pacotes
- Publica no GitHub Packages
- Cria tags Git

---

## 📝 Exemplo Prático Completo

### Cenário: Corrigir um bug no `dropdown-menu`

```bash
# 1. Editar o arquivo
vim lib-verniz-starter/packages/components/dropdown-menu/src/DropdownMenu.tsx

# 2. Criar changeset
cd lib-verniz-starter
yarn changeset
# Seleciona: @nubrell/dropdown-menu
# Tipo: patch
# Descrição: Fix radio icon in DropdownMenu

# 3. Commit
git add .changeset/ packages/components/dropdown-menu/
git commit -m "fix: correct radio icon in DropdownMenu"
git push origin main

# 4. O CI cria um Release PR automaticamente
# 5. Você revisa e faz merge do PR
# 6. Os pacotes são publicados automaticamente ✅
```

---

## 🎯 Tipos de Versão (SemVer)

| Tipo | Quando Usar | Exemplo |
|------|-------------|---------|
| **patch** | Bug fixes, correções pequenas | `0.0.1 → 0.0.2` |
| **minor** | Novas features, retrocompatível | `0.0.1 → 0.1.0` |
| **major** | Breaking changes | `0.0.1 → 1.0.0` |

---

## ⚠️ Importante

- **Sempre crie um changeset** quando fizer mudanças que afetam usuários
- **Não commite código sem changeset** se for uma mudança que precisa ser versionada
- **Revise o Release PR** antes de fazer merge para garantir que as versões estão corretas
- O **CHANGELOG é gerado automaticamente** com base na descrição do changeset

---

## 🔍 Ver Status dos Changesets

```bash
# Ver changesets pendentes
yarn changeset status
```

---

## 📚 Scripts Disponíveis

```bash
# Criar changeset interativo
yarn changeset

# Versionar pacotes (atualiza versões e CHANGELOGs)
yarn changeset:version

# Publicar pacotes
yarn changeset:publish

# Build + Version + Publish (usado pelo CI)
yarn publish-packages
```

---

## 🆚 Diferença: Changeset vs Publicação Individual

### Changeset (Este fluxo)
- ✅ Para múltiplos pacotes
- ✅ CHANGELOGs automáticos
- ✅ Versionamento coordenado
- ✅ Release PRs automáticos
- ✅ Usado para releases planejadas

### Publicação Individual (`yarn publish:component`)
- ✅ Para um único componente rapidamente
- ✅ Controle total sobre quando publicar
- ✅ Sem Release PR
- ✅ Usado para hotfixes rápidos

