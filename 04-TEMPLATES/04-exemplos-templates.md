# Exemplos de Templates - Hygen

## 🎯 Exemplo Completo: Criar Componente Button

### Comando

```bash
yarn component button
```

### Arquivos Gerados

#### 1. Button.tsx

```typescript
import { forwardRef, type HTMLProps, type Ref } from 'react';
import { cn } from '@verniz/utils';
import * as S from './Button.styles';

export type ButtonProps = {
  children?: React.ReactNode;
} & S.ButtonVariants;

type Props = {
  ref?: Ref<HTMLButtonElement>;
} & ButtonProps &
  Omit<HTMLProps<HTMLButtonElement>, keyof ButtonProps>;

/**
 * Button component
 *
 * ### Example Usage
 * ```typescript
 * import { Button } from "@verniz/button";
 *
 * <Button>Click me</Button>
 * ```
 */

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...rest }, ref) => {
    return (
      <S.Button
        ref={ref}
        className={cn(className)}
        {...rest}
      >
        {children}
      </S.Button>
    );
  }
);

Button.displayName = 'Button';
```

#### 2. Button.styles.ts

```typescript
import { cva, type RecipeVariantProps } from 'class-variance-authority';
import { cn } from '@verniz/utils';

export type ButtonVariants = RecipeVariantProps<typeof buttonVariants>;

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export const Button = cn(buttonVariants);
```

#### 3. Button.spec.tsx

```typescript
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Button>Test</Button>
    );
    expect(container).toBeInTheDocument();
  });

  it('should render children', () => {
    render(<Button>Children</Button>);
    expect(screen.getByText('Children')).toBeInTheDocument();
  });

  it('should apply variant styles', () => {
    const { container } = render(
      <Button variant="secondary">Button</Button>
    );
    expect(container.firstChild).toHaveClass('bg-secondary');
  });
});
```

#### 4. Button.stories.tsx

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  component: Button,
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component: `
Button component description.

### Como instalar?
\`\`\`bash
yarn add @verniz/button
\`\`\`

### Como usar?
\`\`\`jsx
import { Button } from '@verniz/button';

<Button>Click me</Button>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Button',
  },
};
```

#### 5. package.json

```json
{
  "name": "@verniz/button",
  "version": "0.0.1",
  "main": "./dist/index.js",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "license": "MIT",
  "files": ["dist/**"],
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

## 🎨 Exemplo: Componente com Múltiplas Variantes

### Input Component

```typescript
// Input.styles.ts
const inputVariants = cva(
  'flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background',
  {
    variants: {
      size: {
        sm: 'h-9',
        md: 'h-10',
        lg: 'h-11',
      },
      variant: {
        default: 'border-input',
        error: 'border-destructive',
      },
    },
    defaultVariants: {
      size: 'md',
      variant: 'default',
    },
  }
);
```

## 🔧 Exemplo: Template com Lógica Condicional

```ejs
---
to: packages/components/<%= h.changeCase.paramCase(name) %>/src/<%= h.changeCase.pascalCase(name) %>.tsx
---

import { forwardRef } from 'react';
<% if (withIcon) { -%>
import { Icon } from '@verniz/icon';
<% } -%>
import * as S from './<%= h.changeCase.pascalCase(name) %>.styles';

export const <%= h.changeCase.pascalCase(name) %> = forwardRef((props, ref) => {
  <% if (withIcon) { -%>
  const { icon, ...rest } = props;
  <% } -%>
  
  return (
    <S.<%= h.changeCase.pascalCase(name) %> ref={ref} {...rest}>
      <% if (withIcon) { -%>
      {icon && <Icon icon={icon} />}
      <% } -%>
      {props.children}
    </S.<%= h.changeCase.pascalCase(name) %>>
  );
});
```

## 📝 Exemplo: Template com Helpers Customizados

```ejs
---
to: packages/components/<%= h.changeCase.paramCase(name) %>/README.md
---

# <%= h.changeCase.pascalCase(name) %>

<%= h.changeCase.sentenceCase(name) %> component for the Verniz design system.

## Installation

\`\`\`bash
yarn add @verniz/<%= h.changeCase.paramCase(name) %>
\`\`\`

## Usage

\`\`\`tsx
import { <%= h.changeCase.pascalCase(name) %> } from '@verniz/<%= h.changeCase.paramCase(name) %>';

<<%= h.changeCase.pascalCase(name) %>>
  Content
</<%= h.changeCase.pascalCase(name) %>>
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| children | ReactNode | - | Component content |

## Examples

### Basic

\`\`\`tsx
<<%= h.changeCase.pascalCase(name) %>>
  Hello World
</<%= h.changeCase.pascalCase(name) %>>
\`\`\`
```

## ✅ Boas Práticas

### 1. Usar Helpers Consistentemente

```ejs
// ✅ Bom
<%= h.changeCase.pascalCase(name) %>
<%= h.changeCase.paramCase(name) %>

// ❌ Evitar
<%= name %>  // Sem transformação
```

### 2. Incluir Comentários nos Templates

```ejs
---
to: packages/components/<%= h.changeCase.paramCase(name) %>/src/<%= h.changeCase.pascalCase(name) %>.tsx
---

<%# Component template for shadcn-based components %>
import { forwardRef } from 'react';
```

### 3. Validar Inputs (se possível)

```ejs
<% if (!name || name.length === 0) { -%>
  <% throw new Error('Name is required') %>
<% } -%>
```

### 4. Manter Templates DRY

```ejs
<%# Reutilizar helpers e lógica comum %>
<% const componentName = h.changeCase.pascalCase(name) %>
<% const packageName = h.changeCase.paramCase(name) %>
```

---

Estes exemplos demonstram a flexibilidade e poder dos templates Hygen para gerar código consistente e completo.

