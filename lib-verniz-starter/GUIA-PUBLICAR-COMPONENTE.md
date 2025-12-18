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

⚠️ **IMPORTANTE:** Cada pessoa deve criar seu próprio arquivo `.npmrc` localmente com seu próprio token. O `.npmrc` NÃO deve ser versionado no Git (já está no `.gitignore`).

Crie/edite o arquivo `.npmrc` na raiz do seu monorepo (apenas localmente, no seu computador):

```ini
@SUA-ORG:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=SEU_TOKEN_AQUI
```

**Substitua:**

- `SUA-ORG` → Seu usuário ou organização do GitHub
- `SEU_TOKEN_AQUI` → O token que você gerou (com a permissão `write:packages`)

**Cada desenvolvedor usa seu próprio token!** Não compartilhe tokens ou faça commit do `.npmrc`.

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

⚠️ **Importante:** Use `npm publish` e não `yarn publish` para evitar problemas de autenticação.

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

# 4. Publicar (⚠️ IMPORTANTE: use npm publish, não yarn publish)
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

### Erro: `Permission permission denied: The token provided does not match expected scopes`

**Causa:** O token do GitHub não tem as permissões necessárias ou está inválido.

**Soluções:**

1. **Verificar permissões do token:**

   - Acesse: GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Verifique se o token tem a permissão `write:packages` marcada
   - Se não tiver, você precisa criar um novo token com essa permissão

2. **Usar `npm publish` ao invés de `yarn publish`:**

   ```bash
   # ❌ Não use:
   yarn publish

   # ✅ Use:
   npm publish
   ```

3. **Verificar se o token está correto no `.npmrc`:**

   - Certifique-se de que o token no `.npmrc` é o token correto e não está expirado
   - O formato deve ser: `//npm.pkg.github.com/:_authToken=ghp_SEU_TOKEN_AQUI`

4. **Verificar se o token tem acesso ao repositório:**
   - Se você está publicando para uma organização, o token precisa ter permissão para acessar essa organização
   - Se estiver usando um token antigo, pode estar expirado (tokens podem ter data de expiração)

### Erro: `Cannot find type definition file for 'minimatch'`

**Causa:** Você está tentando executar `tsc` diretamente na raiz do projeto e o TypeScript não encontra os tipos necessários.

**Solução:** Use o comando de build do package ao invés de `tsc` diretamente:

```bash
# ❌ Não faça isso:
yarn tsc --declaration --emitDeclarationOnly --outDir dist

# ✅ Faça isso:
cd packages/components/button  # ou packages/utils
yarn build
```

Se realmente precisar usar `tsc` diretamente na raiz, adicione `@types/minimatch` como devDependency no `package.json` da raiz:

```json
{
  "devDependencies": {
    "@types/minimatch": "^6.0.0",
    "typescript": "^5.4.5"
  }
}
```

Depois execute `yarn install`.

---

## 📚 Links Úteis

- [Documentação do GitHub Packages](https://docs.github.com/en/packages)
- [Como criar um Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

---

**Pronto! Agora você está pronto para publicar seus componentes! 🎉**
