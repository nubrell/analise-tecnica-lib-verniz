# Tokens e Secrets - Configuração

## 🔑 Tokens Necessários

### 1. GITHUB_TOKEN (Automático)

- ✅ Fornecido automaticamente
- ✅ Permissões configuráveis
- ✅ Disponível como `secrets.GITHUB_TOKEN`

### 2. SONAR_TOKEN (Opcional)

- Criar em https://sonarcloud.io
- Adicionar como secret no GitHub

### 3. CODECOV_TOKEN (Opcional)

- Criar em https://codecov.io
- Adicionar como secret no GitHub

## ⚙️ Configuração

### Permissões do Repositório

```yaml
permissions:
  contents: write      # Criar tags, releases, commits
  pull-requests: write # Criar e atualizar PRs
  packages: write      # Publicar no GitHub Packages
```

### Secrets no GitHub

1. Settings → Secrets and variables → Actions
2. New repository secret
3. Adicionar token

## ✅ Checklist

- [ ] GITHUB_TOKEN configurado (automático)
- [ ] Permissões do repositório ajustadas
- [ ] SONAR_TOKEN (se usar SonarCloud)
- [ ] CODECOV_TOKEN (se usar Codecov)

---

Configuração correta de tokens garante funcionamento do CI/CD.

