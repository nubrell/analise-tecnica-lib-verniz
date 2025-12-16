# Diagramas de Build - TSUP

## 🔨 Fluxo de Build Básico

```mermaid
graph TD
    A[yarn build] --> B[TSUP inicia]
    B --> C[Lê tsup.config.ts]
    C --> D[Identifica entry points]
    D --> E[Resolve dependências]
    E --> F[Verifica externals]
    F --> G[ESBuild transpila]
    G --> H[Gera ESM]
    G --> I[Gera CJS]
    G --> J[Gera .d.ts]
    H --> K[dist/index.mjs]
    I --> L[dist/index.cjs]
    J --> M[dist/index.d.ts]
    K --> N[Build Completo]
    L --> N
    M --> N
```

## 🔄 Fluxo de Build com Turborepo

```mermaid
graph TD
    A[turbo run build] --> B[Turborepo analisa]
    B --> C[Identifica dependências]
    C --> D[Ordena pacotes]
    D --> E[Para cada pacote]
    E --> F[Verifica cache]
    F -->|Cache Hit| G[Usa cache]
    F -->|Cache Miss| H[Executa TSUP]
    H --> I[Build do pacote]
    I --> J[Salva no cache]
    G --> K[Próximo pacote]
    J --> K
    K -->|Mais pacotes| E
    K -->|Todos prontos| L[Build Completo]
```

## 📦 Processo de Transpilação

```mermaid
graph LR
    A[src/index.tsx<br/>TypeScript + JSX] --> B[ESBuild]
    B --> C[Análise de código]
    C --> D[Tree-shaking]
    D --> E[Transpilação]
    E --> F[ESM Output<br/>dist/index.mjs]
    E --> G[CJS Output<br/>dist/index.cjs]
    E --> H[TypeScript<br/>dist/index.d.ts]
```

## 🎯 Resolução de Dependências

```mermaid
graph TD
    A[Entry: src/index.tsx] --> B[Analisa imports]
    B --> C{É external?}
    C -->|Sim| D[Adiciona ao external]
    C -->|Não| E[Bundlado]
    D --> F[Output final]
    E --> G[Incluído no bundle]
    G --> F
```

## 🔍 Fluxo de Watch Mode

```mermaid
graph TD
    A[tsup --watch] --> B[Monitora arquivos]
    B --> C{Mudança detectada?}
    C -->|Não| B
    C -->|Sim| D[Identifica arquivo]
    D --> E[Reexecuta build]
    E --> F[Hot reload]
    F --> B
```

## 📊 Comparativo de Output

```mermaid
graph TB
    A[Source: src/index.tsx] --> B[TSUP]
    B --> C[ESM<br/>dist/index.mjs]
    B --> D[CJS<br/>dist/index.cjs]
    B --> E[Types<br/>dist/index.d.ts]
    B --> F[Sourcemap<br/>dist/index.mjs.map]
    
    C --> G[Consumidor ESM]
    D --> H[Consumidor CJS]
    E --> I[TypeScript]
    F --> J[Debugging]
```

## 🏗️ Arquitetura de Build

```mermaid
graph TB
    subgraph Monorepo[lib-verniz]
        A[packages/components/button] --> B[TSUP]
        C[packages/components/input] --> D[TSUP]
        E[packages/utils] --> F[TSUP]
    end
    
    B --> G[dist/button/]
    D --> H[dist/input/]
    F --> I[dist/utils/]
    
    G --> J[GitHub Packages]
    H --> J
    I --> J
```

## ⚡ Performance do Build

```mermaid
graph LR
    A[Primeira Build<br/>2-5s] --> B[Cache criado]
    B --> C[Builds Incrementais<br/>500ms-1s]
    C --> D[Cache Hit<br/>100-300ms]
    
    E[Sem Cache] --> A
    F[Com Cache] --> C
```

## 🔄 Integração com CI/CD

```mermaid
sequenceDiagram
    participant CI as GitHub Actions
    participant Turbo as Turborepo
    participant TSUP as TSUP
    participant Cache as Cache
    
    CI->>Turbo: yarn build
    Turbo->>Cache: Verifica cache
    Cache-->>Turbo: Cache miss
    Turbo->>TSUP: Executa build
    TSUP->>TSUP: Transpila TypeScript
    TSUP->>TSUP: Gera ESM + CJS
    TSUP->>TSUP: Gera .d.ts
    TSUP-->>Turbo: Build completo
    Turbo->>Cache: Salva cache
    Turbo-->>CI: Build finalizado
```

## 📈 Fluxo de Otimização

```mermaid
graph TD
    A[Código TypeScript] --> B[ESBuild]
    B --> C[Tree-shaking]
    C --> D[Minificação<br/>opcional]
    D --> E[Sourcemaps<br/>opcional]
    E --> F[Output otimizado]
    
    G[External Dependencies] --> H[Não bundladas]
    H --> F
```

---

Estes diagramas ilustram o fluxo completo de build com TSUP, desde a entrada do código até a geração dos artefatos finais.

