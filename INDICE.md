# Índice Completo - RFC/Tech Spec Biblioteca Verniz

## 📚 Navegação Rápida

### Documentos Principais

- [README.md](./README.md) - Visão geral e índice
- [00-EXECUTIVE-SUMMARY.md](./00-EXECUTIVE-SUMMARY.md) - Resumo executivo com recomendações

### 01. Arquitetura

- [01-monorepo-turborepo.md](./01-ARQUITETURA/01-monorepo-turborepo.md) - Análise Monorepo vs Polyrepo
- [02-estrutura-projeto.md](./01-ARQUITETURA/02-estrutura-projeto.md) - Estrutura de pastas proposta
- [03-workspaces.md](./01-ARQUITETURA/03-workspaces.md) - Configuração Yarn Workspaces
- [04-diagramas-arquitetura.md](./01-ARQUITETURA/04-diagramas-arquitetura.md) - Diagramas Mermaid

### 02. Build

- [01-tsup-analise.md](./02-BUILD/01-tsup-analise.md) - Análise completa do TSUP
- [02-alternativas-build.md](./02-BUILD/02-alternativas-build.md) - Rollup, Webpack, Vite, ESBuild
- [03-comparativo-build.md](./02-BUILD/03-comparativo-build.md) - Tabela comparativa
- [04-configuracao-tsup.md](./02-BUILD/04-configuracao-tsup.md) - Configuração recomendada
- [05-diagramas-build.md](./02-BUILD/05-diagramas-build.md) - Fluxo de build

### 03. Versionamento

- [01-changesets-analise.md](./03-VERSIONAMENTO/01-changesets-analise.md) - Análise Changesets
- [02-alternativas-versionamento.md](./03-VERSIONAMENTO/02-alternativas-versionamento.md) - Lerna, Nx, manual
- [03-comparativo-versionamento.md](./03-VERSIONAMENTO/03-comparativo-versionamento.md) - Tabela comparativa
- [04-configuracao-changesets.md](./03-VERSIONAMENTO/04-configuracao-changesets.md) - Setup e workflow
- [05-fluxo-versionamento.md](./03-VERSIONAMENTO/05-fluxo-versionamento.md) - Diagrama do fluxo

### 04. Templates

- [01-hygen-analise.md](./04-TEMPLATES/01-hygen-analise.md) - Análise Hygen
- [02-plop-vs-hygen.md](./04-TEMPLATES/02-plop-vs-hygen.md) - Comparação detalhada
- [03-templates-estrutura.md](./04-TEMPLATES/03-templates-estrutura.md) - Estrutura de templates
- [04-exemplos-templates.md](./04-TEMPLATES/04-exemplos-templates.md) - Exemplos práticos

### 05. Documentação

- [01-storybook-analise.md](./05-DOCUMENTACAO/01-storybook-analise.md) - Análise Storybook
- [02-alternativas-docs.md](./05-DOCUMENTACAO/02-alternativas-docs.md) - Styleguidist, Docz, Ladle
- [03-configuracao-storybook.md](./05-DOCUMENTACAO/03-configuracao-storybook.md) - Setup com Tailwind
- [04-deploy-storybook.md](./05-DOCUMENTACAO/04-deploy-storybook.md) - Deploy e hosting

### 06. Testes

- [01-vitest-analise.md](./06-TESTES/01-vitest-analise.md) - Análise Vitest
- [02-vitest-vs-jest.md](./06-TESTES/02-vitest-vs-jest.md) - Comparação detalhada
- [03-configuracao-vitest.md](./06-TESTES/03-configuracao-vitest.md) - Setup e coverage
- [04-estrategia-testes.md](./06-TESTES/04-estrategia-testes.md) - Estratégia de testes

### 07. CI/CD

- [01-github-actions-overview.md](./07-CICD/01-github-actions-overview.md) - Visão geral
- [02-workflow-release.md](./07-CICD/02-workflow-release.md) - Workflow de release
- [03-workflow-testes.md](./07-CICD/03-workflow-testes.md) - Workflow de testes
- [04-tokens-secrets.md](./07-CICD/04-tokens-secrets.md) - Configuração de tokens
- [05-diagramas-cicd.md](./07-CICD/05-diagramas-cicd.md) - Diagramas de fluxo CI/CD

### 08. Componentes

- [01-shadcn-overview.md](./08-COMPONENTES/01-shadcn-overview.md) - Introdução ao shadcn/ui
- [02-tailwind-config.md](./08-COMPONENTES/02-tailwind-config.md) - Configuração Tailwind
- [03-estrutura-componentes.md](./08-COMPONENTES/03-estrutura-componentes.md) - Como customizar shadcn
- [04-design-tokens.md](./08-COMPONENTES/04-design-tokens.md) - Tokens e temas
- [05-exemplos-componentes.md](./08-COMPONENTES/05-exemplos-componentes.md) - Exemplos práticos

### 09. Recomendações

- [01-decisoes-arquiteturais.md](./09-RECOMENDACOES/01-decisoes-arquiteturais.md) - Decisões principais
- [02-stack-final.md](./09-RECOMENDACOES/02-stack-final.md) - Stack recomendada completa
- [03-justificativas.md](./09-RECOMENDACOES/03-justificativas.md) - Por que cada escolha
- [04-riscos-mitigacao.md](./09-RECOMENDACOES/04-riscos-mitigacao.md) - Riscos e mitigações
- [05-roadmap.md](./09-RECOMENDACOES/05-roadmap.md) - Roadmap de implementação

### 10. Guia de Implementação

- [01-pre-requisitos.md](./10-GUIA-IMPLEMENTACAO/01-pre-requisitos.md) - Pré-requisitos
- [02-setup-inicial.md](./10-GUIA-IMPLEMENTACAO/02-setup-inicial.md) - Setup do monorepo
- [03-configuracao-ferramentas.md](./10-GUIA-IMPLEMENTACAO/03-configuracao-ferramentas.md) - Config de cada ferramenta
- [04-primeiro-componente.md](./10-GUIA-IMPLEMENTACAO/04-primeiro-componente.md) - Criar primeiro componente
- [05-cicd-setup.md](./10-GUIA-IMPLEMENTACAO/05-cicd-setup.md) - Configurar CI/CD
- [06-checklist.md](./10-GUIA-IMPLEMENTACAO/06-checklist.md) - Checklist completo

## 🎯 Fluxo de Leitura Recomendado

1. **Comece aqui**: [README.md](./README.md) e [00-EXECUTIVE-SUMMARY.md](./00-EXECUTIVE-SUMMARY.md)
2. **Entenda a arquitetura**: [01-ARQUITETURA/](./01-ARQUITETURA/)
3. **Explore tecnologias**: [02-BUILD/](./02-BUILD/), [03-VERSIONAMENTO/](./03-VERSIONAMENTO/), etc.
4. **Veja recomendações**: [09-RECOMENDACOES/](./09-RECOMENDACOES/)
5. **Implemente**: [10-GUIA-IMPLEMENTACAO/](./10-GUIA-IMPLEMENTACAO/)

---

**Última atualização**: 2024

