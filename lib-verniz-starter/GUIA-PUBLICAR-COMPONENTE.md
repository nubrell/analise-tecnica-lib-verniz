# 🚀 Guia Rápido: Como Publicar um Componente no GitHub Packages

## 📋 Pré-requisitos

1. **Token do GitHub** (Personal Access Token) com permissão `write:packages`:
   - Acesse: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Clique em "Generate new token"
   - Marque a opção `write:packages`
   - Copie o token gerado (você só verá ele uma vez!)

2. **Node.js 20** e **Yarn** instalados

3. **Repositório** configurado como monorepo

---

## 📝 Passo a Passo

### 1️⃣ Configurar o `.npmrc` na raiz do projeto

Crie/edite o arquivo `.npmrc` na raiz do seu monorepo:

```ini
@SUA-ORG:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=SEU_TOKEN_AQUI
```

**Substitua:**
- `SUA-ORG` → Seu usuário ou organização do GitHub
- `SEU_TOKEN_AQUI` → O token que você gerou

---

### 2️⃣ Configurar o `package.json` do componente

No `package.json` do seu componente (ex: `packages/components/button/package.json`), adicione/configure:

```json
{
  "name": "@SUA-ORG/nome-do-componente",
  "version": "0.0.1",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com",
    "access": "restricted"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/SUA-ORG/SEU-REPO.git"
  },
  "author": "seu-usuario",
  "license": "MIT"
}
```

⚠️ **Importante:** O `name` deve começar com `@SUA-ORG/` (exatamente igual ao que você colocou no `.npmrc`)

---

### 3️⃣ Garantir Node 20

```bash
nvm use
# Ou se tiver .nvmrc, só:
nvm use
```

---

### 4️⃣ Build do componente

```bash
cd packages/components/button
yarn build
```

Verifique se a pasta `dist/` foi criada com os arquivos gerados.

---

### 5️⃣ Publicar no GitHub Packages

```bash
npm publish
```

Se tudo estiver correto, você verá uma mensagem como:

```
+ @SUA-ORG/button@0.0.1
```

---

### 6️⃣ Verificar publicação

Você pode verificar se o package foi publicado:

- **No seu perfil:** `https://github.com/SUA-ORG?tab=packages`
- **No seu repositório:** Na sidebar direita, na seção "Packages"

---

## ✅ Checklist Rápido

Antes de publicar, verifique:

- [ ] Token do GitHub configurado no `.npmrc`
- [ ] `package.json` com `name` no formato `@SUA-ORG/componente`
- [ ] `publishConfig` com registry do GitHub
- [ ] `repository` configurado corretamente
- [ ] Build executado sem erros
- [ ] Pasta `dist/` contém os arquivos gerados

---

## 💡 Exemplo Completo

Para um componente chamado `button` na organização `str-well`:

### `.npmrc` (na raiz do projeto)

```ini
@str-well:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=ghp_xxxxxxxxxxxxx
```

### `packages/components/button/package.json`

```json
{
  "name": "@str-well/button",
  "version": "0.0.1",
  "publishConfig": {
    "registry": "https://npm.pkg.github.com",
    "access": "restricted"
  },
  "repository": {
    "type": "git",
    "url": "https://github.com/str-well/seu-repo.git"
  },
  "author": "str-well",
  "license": "MIT"
}
```

### Comandos no terminal

```bash
# 1. Usar Node 20
nvm use

# 2. Ir para a pasta do componente
cd packages/components/button

# 3. Build
yarn build

# 4. Publicar
npm publish
```

---

## 🔒 Dica de Segurança

⚠️ **Importante:** O token no `.npmrc` é uma informação sensível. Se você for versionar o código no Git:

1. Adicione `.npmrc` ao `.gitignore`, OU
2. Use variáveis de ambiente no lugar do token direto

---

## 🆘 Problemas Comuns

### Erro: `code ENEEDAUTH`
**Solução:** Verifique se o token está correto no `.npmrc`

### Erro: `404 Not Found`
**Solução:** Verifique se o nome do package (`name` no `package.json`) está no formato `@SUA-ORG/nome` e corresponde ao que está no `.npmrc`

### Erro: `package already exists`
**Solução:** Incremente a versão no `package.json` antes de publicar novamente

---

## 📚 Links Úteis

- [Documentação do GitHub Packages](https://docs.github.com/en/packages)
- [Como criar um Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

---

**Pronto! Agora você está pronto para publicar seus componentes! 🎉**

