# Setup CI/CD - Biblioteca Verniz

## 📋 Passo a Passo

### 1. Criar Workflows

```bash
mkdir -p .github/workflows
```

### 2. Workflow de Testes

```yaml
# .github/workflows/test.yml
name: Test and Lint

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: 'yarn'
      - run: yarn install
      - run: yarn build
      - run: yarn test
```

### 3. Workflow de Release

```yaml
# .github/workflows/release.yml
name: Release

on:
  push:
    branches: [main]

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: yarn install
      - run: yarn build
      - uses: changesets/action@v1
        with:
          publish: yarn publish-packages
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```

### 4. Configurar Secrets

1. Settings → Secrets and variables → Actions
2. Adicionar tokens necessários

## ✅ Checklist

- [ ] Workflows criados
- [ ] Secrets configurados
- [ ] Permissões ajustadas
- [ ] Testado localmente
- [ ] Primeiro run bem-sucedido

---

CI/CD configurado garante automação completa do processo de desenvolvimento e release.

