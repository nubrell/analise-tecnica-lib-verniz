# Estrutura de Templates - Hygen

## 📁 Estrutura de Pastas

```
_templates/
└── component/
    └── web/
        ├── component.ejs.t
        ├── styles.ejs.t
        ├── spec.ejs.t
        ├── stories.ejs.t
        ├── index.ejs.t
        ├── package.ejs.t
        ├── tsup.ejs.t
        └── tsconfig.ejs.t
```

## 📝 Templates Individuais

### 1. Component Template

```ejs
---
to: packages/components/<%= h.changeCase.paramCase(name) %>/src/<%= h.changeCase.pascalCase(name) %>.tsx
---

import { forwardRef, type HTMLProps, type Ref } from 'react';
import { cn } from '@verniz/utils';
import * as S from './<%= h.changeCase.pascalCase(name) %>.styles';

export type <%= h.changeCase.pascalCase(name) %>Props = {
  children?: React.ReactNode;
} & S.<%= h.changeCase.pascalCase(name) %>Variants;

type Props = {
  ref?: Ref<HTMLDivElement>;
} & <%= h.changeCase.pascalCase(name) %>Props &
  Omit<HTMLProps<HTMLDivElement>, keyof <%= h.changeCase.pascalCase(name) %>Props>;

/**
 * <%= h.changeCase.pascalCase(name) %> component
 *
 * ### Example Usage
 * ```typescript
 * import { <%= h.changeCase.pascalCase(name) %> } from "@verniz/<%= h.changeCase.paramCase(name) %>";
 *
 * <<%= h.changeCase.pascalCase(name) %>>
 *   Content
 * </<%= h.changeCase.pascalCase(name) %>>
 * ```
 */

export const <%= h.changeCase.pascalCase(name) %> = forwardRef<HTMLDivElement, Props>(
  ({ children, className, ...rest }, ref) => {
    return (
      <S.<%= h.changeCase.pascalCase(name) %>
        ref={ref}
        className={cn(className)}
        {...rest}
      >
        {children}
      </S.<%= h.changeCase.pascalCase(name) %>>
    );
  }
);

<%= h.changeCase.pascalCase(name) %>.displayName = '<%= h.changeCase.pascalCase(name) %>';
```

### 2. Styles Template

```ejs
---
to: packages/components/<%= h.changeCase.paramCase(name) %>/src/<%= h.changeCase.pascalCase(name) %>.styles.ts
---

import { cva, type RecipeVariantProps } from 'class-variance-authority';
import { cn } from '@verniz/utils';

export type <%= h.changeCase.pascalCase(name) %>Variants = RecipeVariantProps<typeof <%= h.changeCase.camelCase(name) %>Variants>;

const <%= h.changeCase.camelCase(name) %>Variants = cva(
  'base-styles-here',
  {
    variants: {
      variant: {
        default: 'variant-default-styles',
        secondary: 'variant-secondary-styles',
      },
      size: {
        sm: 'size-sm-styles',
        md: 'size-md-styles',
        lg: 'size-lg-styles',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export const <%= h.changeCase.pascalCase(name) %> = cn(<%= h.changeCase.camelCase(name) %>Variants);
```

### 3. Spec Template (Testes)

```ejs
---
to: packages/components/<%= h.changeCase.paramCase(name) %>/src/<%= h.changeCase.pascalCase(name) %>.spec.tsx
---

import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { <%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) %>';

describe('<%= h.changeCase.pascalCase(name) %>', () => {
  it('should render correctly', () => {
    const { container } = render(
      <<%= h.changeCase.pascalCase(name) %>>Test</<%= h.changeCase.pascalCase(name) %>>
    );
    expect(container).toBeInTheDocument();
  });

  it('should render children', () => {
    render(<<%= h.changeCase.pascalCase(name) %>>Children</<%= h.changeCase.pascalCase(name) %>>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });
});
```

### 4. Stories Template

```ejs
---
to: packages/components/<%= h.changeCase.paramCase(name) %>/src/<%= h.changeCase.pascalCase(name) %>.stories.tsx
---

import type { Meta, StoryObj } from '@storybook/react';
import { <%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) %>';

const meta = {
  component: <%= h.changeCase.pascalCase(name) %>,
  title: 'Components/<%= h.changeCase.pascalCase(name) %>',
  parameters: {
    docs: {
      description: {
        component: `
<%= h.changeCase.pascalCase(name) %> component description.

### Como instalar?
\`\`\`bash
yarn add @verniz/<%= h.changeCase.paramCase(name) %>
\`\`\`

### Como usar?
\`\`\`jsx
import { <%= h.changeCase.pascalCase(name) %> } from '@verniz/<%= h.changeCase.paramCase(name) %>';

<<%= h.changeCase.pascalCase(name) %>>
  Content
</<%= h.changeCase.pascalCase(name) %>>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    children: {
      description: 'Conteúdo do componente',
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof <%= h.changeCase.pascalCase(name) %>>;

export default meta;
type Story = StoryObj<typeof <%= h.changeCase.pascalCase(name) %>>;

export const Default: Story = {
  args: {
    children: '<%= h.changeCase.pascalCase(name) %>',
  },
};
```

### 5. Index Template

```ejs
---
to: packages/components/<%= h.changeCase.paramCase(name) %>/src/index.tsx
---

export { <%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) %>';
export type { <%= h.changeCase.pascalCase(name) %>Props } from './<%= h.changeCase.pascalCase(name) %>';
```

### 6. Package Template

```ejs
---
to: packages/components/<%= h.changeCase.paramCase(name) %>/package.json
---

{
  "name": "@verniz/<%= h.changeCase.paramCase(name) %>",
  "version": "0.0.1",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "license": "MIT",
  "files": [
    "dist/**"
  ],
  "exports": {
    ".": {
      "import": "./dist/index.mjs",
      "require": "./dist/index.js",
      "types": "./dist/index.d.ts"
    }
  },
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "lint": "eslint . --max-warnings 100",
    "test": "vitest run --coverage",
    "test:watch": "vitest",
    "clean": "rm -rf .turbo && rm -rf node_modules && rm -rf dist"
  },
  "dependencies": {
    "@verniz/utils": "*"
  },
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@verniz/eslint-config": "*",
    "@verniz/typescript-config": "*",
    "@testing-library/react": "^16.0.0",
    "@testing-library/jest-dom": "^6.4.6",
    "@vitest/coverage-v8": "^1.5.2",
    "eslint": "^8.57.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tsup": "^8.0.2",
    "typescript": "^5.4.5",
    "vitest": "^1.5.2"
  }
}
```

### 7. TSUP Config Template

```ejs
---
to: packages/components/<%= h.changeCase.paramCase(name) %>/tsup.config.ts
---

import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  dts: true,
  format: ['esm', 'cjs'],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  splitting: false,
  sourcemap: true,
  clean: true,
});
```

### 8. TypeScript Config Template

```ejs
---
to: packages/components/<%= h.changeCase.paramCase(name) %>/tsconfig.json
---

{
  "extends": "@verniz/typescript-config/react-library.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "**/*.spec.tsx", "**/*.stories.tsx"]
}
```

## 🎯 Helpers Disponíveis

### Hygen Helpers

- `h.changeCase.pascalCase(name)` → `ButtonGroup`
- `h.changeCase.camelCase(name)` → `buttonGroup`
- `h.changeCase.paramCase(name)` → `button-group`
- `h.changeCase.snakeCase(name)` → `button_group`
- `h.changeCase.constantCase(name)` → `BUTTON_GROUP`

## 📝 Uso

### Comando

```bash
yarn component button
# ou
hygen component web button
```

### Processo

1. Hygen lê templates em `_templates/component/web/`
2. Substitui variáveis (`name` → `button`)
3. Aplica helpers de transformação
4. Gera arquivos nos locais especificados

## ✅ Checklist de Template

- [ ] Component principal
- [ ] Estilos (Tailwind + CVA)
- [ ] Testes (Vitest)
- [ ] Stories (Storybook)
- [ ] Index (exports)
- [ ] package.json
- [ ] tsup.config.ts
- [ ] tsconfig.json

---

Esta estrutura garante consistência e acelera a criação de novos componentes.

