# Criar Primeiro Componente - Biblioteca Verniz

## 📋 Passo a Passo

### 1. Gerar Componente com Hygen

```bash
yarn component button
```

### 2. Implementar Componente

```typescript
// packages/components/button/src/Button.tsx
import { forwardRef } from 'react';
import { cn } from '@verniz/utils';
import { buttonVariants } from './Button.styles';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
```

### 3. Escrever Testes

```typescript
// Button.spec.tsx
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });
});
```

### 4. Criar Stories

```typescript
// Button.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  component: Button,
  title: 'Components/Button'
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button'
  }
};
```

### 5. Testar Localmente

```bash
yarn build
yarn test
yarn dev  # Storybook
```

## ✅ Checklist

- [ ] Componente gerado
- [ ] Implementação completa
- [ ] Testes escritos
- [ ] Stories criadas
- [ ] Build funcionando
- [ ] Storybook funcionando

---

Primeiro componente completo valida toda a stack e configuração.

