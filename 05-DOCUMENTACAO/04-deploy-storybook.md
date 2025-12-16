# Deploy Storybook - Guia Completo

## 📋 Opções de Deploy

### 1. Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
cd apps/docs
vercel
```

### 2. Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
cd apps/docs
netlify deploy --prod
```

### 3. GitHub Pages

```yaml
# .github/workflows/deploy-storybook.yml
name: Deploy Storybook

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 18
      - run: yarn install
      - run: yarn build-storybook
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: apps/docs/storybook-static
```

## ✅ Checklist

- [ ] Storybook build funcionando
- [ ] Deploy configurado
- [ ] URL de produção funcionando
- [ ] CI/CD configurado (opcional)

---

Deploy do Storybook garante documentação acessível para toda a equipe.

