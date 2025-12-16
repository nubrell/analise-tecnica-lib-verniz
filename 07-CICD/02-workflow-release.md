# Workflow de Release - GitHub Actions

## 📋 Workflow Completo

```yaml
name: Release Packages

on:
  push:
    branches: [main]

concurrency: 
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: false

jobs:
  release:
    name: Release and Publish
    runs-on: ubuntu-latest
    permissions:
      contents: write
      pull-requests: write
      packages: write
    
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0
          token: ${{ secrets.GITHUB_TOKEN }}

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'yarn'

      - name: Configure Git
        run: |
          git config user.name "${{ github.actor }}"
          git config user.email "${{ github.actor }}@users.noreply.github.com"

      - name: Install Dependencies
        run: yarn install --frozen-lockfile

      - name: Build Packages
        run: yarn build
        env:
          NODE_ENV: production

      - name: Setup NPM Registry
        uses: actions/setup-node@v4
        with:
          registry-url: 'https://npm.pkg.github.com'
          scope: '@madeiramadeirabr'
          always-auth: true

      - name: Authenticate GitHub Packages
        run: |
          echo "//npm.pkg.github.com/:_authToken=${{ secrets.GITHUB_TOKEN }}" >> ~/.npmrc
          echo "@madeiramadeirabr:registry=https://npm.pkg.github.com" >> ~/.npmrc

      - name: Create Release Pull Request or Publish
        id: changesets
        uses: changesets/action@v1
        with:
          publish: yarn publish-packages
          title: 'chore(release): publish packages'
          commit: 'chore(release): publish packages'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NODE_AUTH_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          HUSKY: '0'
```

## ✅ Explicação

1. **Checkout**: Baixa código
2. **Setup Node.js**: Configura ambiente
3. **Configure Git**: Necessário para changesets
4. **Install**: Instala dependências
5. **Build**: Compila pacotes
6. **Setup NPM**: Configura registry
7. **Authenticate**: Autentica no GitHub Packages
8. **Changesets**: Cria PR ou publica

---

Este workflow automatiza completamente o processo de release.

