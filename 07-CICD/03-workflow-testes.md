# Workflow de Testes - GitHub Actions

## 📋 Workflow Completo

```yaml
name: Test and Lint

on:
  push:
    branches: [main, production]
  pull_request:
    branches: [main, production]

jobs:
  test-and-lint:
    name: Test and Lint
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          cache: 'yarn'

      - name: Install Dependencies
        run: yarn install --frozen-lockfile

      - name: Build Packages
        run: yarn build
        env:
          NODE_ENV: production

      - name: Run Lint
        run: yarn lint
        continue-on-error: true

      - name: Run Tests
        run: yarn test
        env:
          CI: true

      - name: Upload Coverage
        uses: codecov/codecov-action@v3
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
          files: ./coverage/lcov.info
          fail_ci_if_error: false
```

## ✅ Explicação

1. **Checkout**: Baixa código
2. **Setup Node.js**: Configura ambiente com cache
3. **Install**: Instala dependências
4. **Build**: Compila pacotes
5. **Lint**: Valida código
6. **Test**: Executa testes
7. **Upload Coverage**: Envia coverage

---

Este workflow garante qualidade de código antes de merge.

