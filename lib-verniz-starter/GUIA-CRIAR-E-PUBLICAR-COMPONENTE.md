# 🚀 Guia Completo: Criar e Publicar um Componente Automaticamente

Este guia mostra como criar um novo componente e publicá-lo automaticamente usando GitHub Actions, **sem precisar entrar no GitHub para rodar o job manualmente**.

---

## 📋 Passo a Passo

### 1️⃣ Criar o Componente

No terminal, na raiz do projeto (`lib-verniz-starter`):

```bash
# Usar Node 20
nvm use

# Gerar o componente usando Hygen
yarn component
```

Quando solicitado, digite o nome do componente em **kebab-case** (ex: `meu-componente`, `input-text`, `card`).

Isso criará toda a estrutura necessária:
- ✅ Componente React com TypeScript
- ✅ Estilos com CVA (Class Variance Authority)
- ✅ Testes
- ✅ Stories do Storybook
- ✅ Configurações de build

---

### 2️⃣ Desenvolver o Componente

Edite os arquivos do componente em `packages/components/seu-componente/`:

- `src/SeuComponente.tsx` - Lógica do componente
- `src/SeuComponente.styles.ts` - Variantes e estilos
- `src/SeuComponente.spec.tsx` - Testes

---

### 3️⃣ Testar Localmente (Opcional)

```bash
# Build do componente
cd packages/components/seu-componente
yarn build

# Rodar testes
yarn test

# Ver no Storybook
cd ../../..
yarn dev
```

---

### 4️⃣ Fazer Commit e Push

```bash
# Voltar para a raiz
cd /caminho/para/lib-verniz-starter

# Adicionar as mudanças
git add packages/components/seu-componente

# Fazer commit
git commit -m "feat: add seu-componente component"

# Push para o repositório
git push origin main
```

---

### 5️⃣ Publicar o Componente

Para publicar automaticamente, você precisa criar uma **tag Git** seguindo o padrão:

```
nubrell/nome-do-componente@versao
```

**Exemplo:**
- Componente: `meu-componente`
- Versão: `0.0.1`
- Tag: `nubrell/meu-componente@0.0.1`

#### Criar a tag e publicar:

```bash
# 1. Certifique-se de estar na raiz do repositório
cd /caminho/para/analise-tecnica-lib-verniz

# 2. Criar a tag (substitua 'meu-componente' e '0.0.1' pelos valores corretos)
git tag nubrell/meu-componente@0.0.1

# 3. Fazer push da tag (isso aciona o workflow automaticamente!)
git push origin nubrell/meu-componente@0.0.1
```

⚠️ **Importante:** 
- Use o nome exato do componente como está na pasta (kebab-case)
- A versão deve ser compatível com semver (ex: 0.0.1, 0.1.0, 1.0.0)
- O workflow será acionado automaticamente quando você fizer push da tag

---

### 6️⃣ Verificar a Publicação

1. Vá para **Actions** no GitHub:
   ```
   https://github.com/nubrell/analise-tecnica-lib-verniz/actions
   ```

2. Você verá o workflow **"Publish Single Package"** rodando

3. Quando terminar com sucesso ✅, o componente estará publicado em:
   ```
   https://github.com/orgs/nubrell/packages
   ```

---

## 🎯 Exemplo Completo

Vamos criar um componente chamado `alert`:

```bash
# 1. Criar componente
cd lib-verniz-starter
nvm use
yarn component
# Digite: alert

# 2. Desenvolver (edite os arquivos conforme necessário)
# ... código do componente ...

# 3. Commit
cd ..  # Volta para a raiz do repo
git add lib-verniz-starter/packages/components/alert
git commit -m "feat: add alert component"
git push origin main

# 4. Publicar versão 0.0.1
git tag nubrell/alert@0.0.1
git push origin nubrell/alert@0.0.1
```

Pronto! O componente será publicado automaticamente. 🎉

---

## 📦 Publicar Nova Versão do Mesmo Componente

Para publicar uma nova versão (ex: 0.0.2, 0.1.0, 1.0.0):

```bash
git tag nubrell/alert@0.0.2
git push origin nubrell/alert@0.0.2
```

---

## 🔧 Publicação Manual (Alternativa)

Se você preferir publicar manualmente via GitHub Actions UI:

1. Vá para **Actions** → **Publish Single Package**
2. Clique em **"Run workflow"**
3. Informe o caminho do package: `lib-verniz-starter/packages/components/seu-componente`
4. Clique em **"Run workflow"**

---

## ⚠️ Troubleshooting

### Tag não acionou o workflow?

- Verifique se a tag segue o padrão exato: `nubrell/nome@versao`
- Certifique-se de ter feito push da tag: `git push origin nubrell/nome@versao`

### Erro "package already published"?

- A versão já existe. Use uma versão nova (ex: 0.0.2 ao invés de 0.0.1)

### Erro de build?

- Certifique-se de que o componente tem todas as dependências necessárias no `package.json`
- Verifique se o build funciona localmente: `cd packages/components/seu-componente && yarn build`

---

## 📚 Próximos Passos

Depois de publicar, você pode instalar o componente em outros projetos:

```bash
npm install @nubrell/seu-componente
```

Ou se usar Yarn:

```bash
yarn add @nubrell/seu-componente
```

**Nota:** Você precisa configurar o `.npmrc` para acessar pacotes da organização `@nubrell`:

```ini
@nubrell:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=SEU_TOKEN_AQUI
```

