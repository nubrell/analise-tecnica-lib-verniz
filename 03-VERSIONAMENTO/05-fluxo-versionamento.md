# Fluxo de Versionamento - Changesets

## 🔄 Fluxo Completo

```mermaid
sequenceDiagram
    participant Dev as Desenvolvedor
    participant Changesets as Changesets
    participant CI as GitHub Actions
    participant Turborepo as Turborepo
    participant Registry as GitHub Packages
    
    Dev->>Changesets: yarn changeset
    Changesets->>Dev: Cria arquivo .changeset
    Dev->>Dev: Commit e push
    
    Dev->>CI: Push para main
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

## 📊 Estados do Versionamento

```mermaid
stateDiagram-v2
    [*] --> Desenvolvimento: Criar mudança
    Desenvolvimento --> Changeset: yarn changeset
    Changeset --> Commit: Arquivo criado
    Commit --> CI: Push
    CI --> ReleasePR: Detecta changesets
    ReleasePR --> Revisao: PR criado
    Revisao --> Merge: Aprovado
    Merge --> Versionamento: Atualiza versões
    Versionamento --> Publicacao: Publica pacotes
    Publicacao --> [*]
    
    Revisao --> Desenvolvimento: Rejeitado
    Versionamento --> Desenvolvimento: Erro
```

## 🎯 Fluxo Detalhado por Etapa

### Etapa 1: Desenvolvimento

```mermaid
graph TD
    A[Desenvolvedor cria mudança] --> B[Implementa feature/fix]
    B --> C[Testa localmente]
    C --> D[Commit código]
    D --> E[Precisa versionar?]
    E -->|Sim| F[yarn changeset]
    E -->|Não| G[Continua desenvolvimento]
```

### Etapa 2: Criar Changeset

```mermaid
graph TD
    A[yarn changeset] --> B[Seleciona pacotes]
    B --> C[Define tipo versão]
    C --> D[Escreve descrição]
    D --> E[Arquivo .changeset criado]
    E --> F[Commit changeset]
```

### Etapa 3: CI/CD Detecta

```mermaid
graph TD
    A[Push para main] --> B[GitHub Actions trigger]
    B --> C[Build packages]
    C --> D[Changesets action]
    D --> E{Changesets encontrados?}
    E -->|Sim| F[Cria Release PR]
    E -->|Não| G[Fim]
    F --> H[Atualiza versões]
    H --> I[Atualiza CHANGELOGs]
    I --> J[PR pronto para review]
```

### Etapa 4: Release PR

```mermaid
graph TD
    A[Release PR criado] --> B[Revisar mudanças]
    B --> C{Versões corretas?}
    C -->|Sim| D[CHANGELOGs OK?]
    C -->|Não| E[Fechar PR]
    D -->|Sim| F[Merge PR]
    D -->|Não| E
    F --> G[Trigger publicação]
```

### Etapa 5: Publicação

```mermaid
graph TD
    A[Merge Release PR] --> B[CI detecta merge]
    B --> C[Build packages]
    C --> D[changeset version]
    D --> E[changeset publish]
    E --> F[Publica no registry]
    F --> G[Tags Git]
    G --> H[Release completo]
```

## 📦 Estrutura de Arquivos Durante o Fluxo

### Estado Inicial

```
.changeset/
├── config.json
└── (vazio)
```

### Após Criar Changeset

```
.changeset/
├── config.json
└── abc123-add-icon-support.md
```

### Após Versionar

```
packages/
├── button/
│   ├── CHANGELOG.md  # Atualizado
│   └── package.json  # Versão: 0.0.1 → 0.0.2
└── utils/
    ├── CHANGELOG.md
    └── package.json
```

## 🔄 Ciclo de Vida de um Changeset

```mermaid
graph LR
    A[Criado] --> B[Commitado]
    B --> C[Detectado pelo CI]
    C --> D[Release PR]
    D --> E[Merged]
    E --> F[Publicado]
    F --> G[Removido]
```

## 🎯 Tipos de Versão

### Patch (0.0.1 → 0.0.2)

```mermaid
graph TD
    A[Bug fix] --> B[Patch]
    B --> C[Versão: 0.0.1 → 0.0.2]
    C --> D[Backward compatible]
```

### Minor (0.0.1 → 0.1.0)

```mermaid
graph TD
    A[Nova feature] --> B[Minor]
    B --> C[Versão: 0.0.1 → 0.1.0]
    C --> D[Backward compatible]
```

### Major (0.0.1 → 1.0.0)

```mermaid
graph TD
    A[Breaking change] --> B[Major]
    B --> C[Versão: 0.0.1 → 1.0.0]
    C --> D[Pode quebrar compatibilidade]
```

## 📊 Coordenação de Dependências

```mermaid
graph TD
    A[@verniz/button: patch] --> B[Atualiza versão]
    B --> C[@verniz/utils: patch]
    C --> D[Dependência interna atualizada]
    D --> E[Versões coordenadas]
```

## ⚡ Performance do Fluxo

```mermaid
graph LR
    A[Criar changeset<br/>10-30s] --> B[CI detecta<br/>1-2min]
    B --> C[Release PR<br/>2-5min]
    C --> D[Merge PR<br/>Manual]
    D --> E[Publicar<br/>2-5min]
    E --> F[Total: 15-20min]
```

---

Estes diagramas ilustram o fluxo completo de versionamento com Changesets, desde a criação do changeset até a publicação dos pacotes.

