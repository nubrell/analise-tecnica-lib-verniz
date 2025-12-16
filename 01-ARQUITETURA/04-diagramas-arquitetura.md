# Diagramas de Arquitetura - Biblioteca Verniz

## 🏗️ Arquitetura Geral

```mermaid
graph TB
    subgraph Monorepo[lib-verniz Monorepo]
        subgraph Packages[packages/]
            Components[components/<br/>Componentes shadcn]
            Utils[utils/<br/>Utilitários]
            Theme[theme/<br/>Design Tokens]
        end
        
        subgraph Apps[apps/]
            Docs[docs/<br/>Storybook]
        end
        
        subgraph Shared[shared/]
            ESLint[eslint-config/<br/>ESLint]
            TSConfig[typescript-config/<br/>TypeScript]
        end
    end
    
    Components --> Utils
    Components --> Theme
    Docs --> Components
    Docs --> Utils
    Docs --> Theme
    
    ESLint -.-> Components
    TSConfig -.-> Components
```

## 🔄 Fluxo de Desenvolvimento

```mermaid
sequenceDiagram
    participant Dev as Desenvolvedor
    participant Hygen as Hygen
    participant Turborepo as Turborepo
    participant Vitest as Vitest
    participant Storybook as Storybook
    participant Changesets as Changesets
    participant CI as GitHub Actions
    
    Dev->>Hygen: yarn component button
    Hygen->>Dev: Gera estrutura completa
    
    Dev->>Dev: Desenvolve componente
    Dev->>Vitest: yarn test
    Vitest->>Dev: Resultados dos testes
    
    Dev->>Storybook: yarn dev
    Storybook->>Dev: Preview do componente
    
    Dev->>Changesets: yarn changeset
    Changesets->>Dev: Cria arquivo de mudança
    
    Dev->>CI: Push para production
    CI->>Turborepo: yarn build
    Turborepo->>CI: Build otimizado
    
    CI->>Changesets: Detecta changesets
    Changesets->>CI: Cria Release PR
    
    CI->>CI: Merge Release PR
    CI->>CI: Publica pacotes
```

## 📦 Estrutura de Dependências

```mermaid
graph LR
    A["@verniz/button"] --> B["@verniz/utils"]
    A --> C["@verniz/theme"]
    D["@verniz/input"] --> B
    D --> C
    E["@verniz/select"] --> B
    E --> C
    
    F[apps/docs] --> A
    F --> D
    F --> E
    F --> B
    F --> C
    
    G[shared/eslint-config] -.-> A
    G -.-> D
    G -.-> E
    
    H[shared/typescript-config] -.-> A
    H -.-> D
    H -.-> E
```

## 🔨 Fluxo de Build

```mermaid
graph TD
    A[yarn build] --> B[Turborepo analisa]
    B --> C[Identifica dependências]
    C --> D[Verifica cache]
    
    D -->|Cache Hit| E[Usa cache]
    D -->|Cache Miss| F[Executa TSUP]
    
    F --> G[Transpila TypeScript]
    G --> H[Gera ESM + CJS]
    H --> I[Gera .d.ts]
    I --> J[Salva no cache]
    
    E --> K[Build completo]
    J --> K
    
    K --> L[Distribui para dependentes]
```

## 🧪 Fluxo de Testes

```mermaid
graph TD
    A[yarn test] --> B[Turborepo]
    B --> C[Para cada pacote]
    C --> D[Vitest]
    D --> E[Carrega configuração]
    E --> F[Executa testes]
    F --> G[Gera coverage]
    G --> H[Reporta resultados]
    
    I[yarn test:watch] --> J[Vitest Watch]
    J --> K[Monitora mudanças]
    K -->|Mudança detectada| L[Reexecuta testes]
    L --> M[Hot reload]
```

## 📚 Fluxo de Documentação

```mermaid
graph TD
    A[yarn dev] --> B[Storybook]
    B --> C[Carrega stories]
    C --> D[Renderiza componentes]
    D --> E[Hot Module Replacement]
    
    F[Build Storybook] --> G[Gera static files]
    G --> H[Deploy]
    H --> I[Chromatic/Vercel]
```

## 🚀 Fluxo de Release

```mermaid
sequenceDiagram
    participant Dev as Desenvolvedor
    participant Changesets as Changesets
    participant CI as GitHub Actions
    participant Turborepo as Turborepo
    participant Registry as GitHub Packages
    
    Dev->>Changesets: yarn changeset
    Changesets->>Dev: Cria arquivo .changeset
    
    Dev->>CI: Push para production
    CI->>Turborepo: yarn build
    Turborepo->>CI: Build completo
    
    CI->>Changesets: Detecta changesets
    Changesets->>CI: Cria Release PR
    CI->>CI: Atualiza versões
    CI->>CI: Atualiza CHANGELOGs
    
    CI->>CI: Merge Release PR
    CI->>Turborepo: yarn build
    CI->>Changesets: changeset publish
    Changesets->>Registry: Publica pacotes
```

## 🏛️ Arquitetura de Componentes

```mermaid
graph TB
    subgraph Component[Componente shadcn]
        A[Button.tsx] --> B[Button.styles.ts]
        A --> C[cn utility]
        C --> D["@verniz/utils"]
        B --> E[Tailwind CSS]
        E --> F["@verniz/theme"]
    end
    
    G[Button.spec.tsx] --> A
    H[Button.stories.tsx] --> A
    
    I[Vitest] --> G
    J[Storybook] --> H
```

## 🔄 Ciclo de Vida do Componente

```mermaid
stateDiagram-v2
    [*] --> Criar: yarn component
    Criar --> Desenvolver: Implementar
    Desenvolver --> Testar: yarn test
    Testar --> Documentar: yarn dev
    Documentar --> Revisar: Code Review
    Revisar --> Versionar: yarn changeset
    Versionar --> Publicar: CI/CD
    Publicar --> [*]
    
    Testar --> Desenvolver: Falha
    Documentar --> Desenvolver: Ajustes
    Revisar --> Desenvolver: Feedback
```

## 📊 Relações entre Ferramentas

```mermaid
graph TB
    A[Turborepo] --> B[Build]
    A --> C[Testes]
    A --> D[Lint]
    
    E[TSUP] --> B
    F[Vitest] --> C
    G[ESLint] --> D
    
    H[Hygen] --> I[Templates]
    I --> J[Componentes]
    
    K[Storybook] --> L[Documentação]
    L --> J
    
    M[Changesets] --> N[Versionamento]
    N --> O[Publicação]
    
    P[GitHub Actions] --> B
    P --> C
    P --> N
```

## 🎯 Stack Tecnológica Completa

```mermaid
mindmap
  root((Biblioteca Verniz))
    Monorepo
      Turborepo
      Yarn Workspaces
    Build
      TSUP
      TypeScript
      ESM + CJS
    Testes
      Vitest
      Testing Library
    Documentação
      Storybook
      Tailwind CSS
    Versionamento
      Changesets
      GitHub Packages
    Templates
      Hygen
      EJS
    CI/CD
      GitHub Actions
      Workflows
    Componentes
      shadcn/ui
      Tailwind CSS
      React
```

---

Estes diagramas fornecem uma visão clara da arquitetura e fluxos da biblioteca Verniz.

