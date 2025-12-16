# Estrutura de Componentes - shadcn/ui

## 📁 Estrutura Típica

```
packages/components/button/
├── src/
│   ├── Button.tsx          # Componente principal
│   ├── Button.styles.ts    # Estilos Tailwind
│   ├── Button.spec.tsx     # Testes
│   ├── Button.stories.tsx  # Storybook
│   └── index.tsx           # Exports
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

## 🎨 Componente Baseado em shadcn

### Exemplo: Button

```typescript
// Button.tsx
import { forwardRef } from 'react';
import { cn } from '@verniz/utils';
import { buttonVariants } from './Button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary' | 'destructive';
  size?: 'sm' | 'md' | 'lg';
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
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

Button.displayName = 'Button';

export { Button };
```

### Estilos com CVA

```typescript
// Button.styles.ts
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md font-medium',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground',
        secondary: 'bg-secondary text-secondary-foreground',
        destructive: 'bg-destructive text-destructive-foreground',
      },
      size: {
        sm: 'h-9 px-3',
        md: 'h-10 px-4',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;
export { buttonVariants };
```

## ✅ Checklist

- [ ] Componente baseado em shadcn
- [ ] Estilos com CVA
- [ ] TypeScript completo
- [ ] Testes escritos
- [ ] Stories criadas

---

Esta estrutura garante componentes customizados baseados em shadcn/ui com total controle.

