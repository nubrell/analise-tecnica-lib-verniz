# Exemplos de Componentes - shadcn/ui

## 🎯 Exemplo Completo: Button

### Código do Componente

```typescript
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

### Uso

```tsx
import { Button } from '@verniz/button';

<Button variant="default" size="md">
  Click me
</Button>
```

## 🎨 Exemplo: Input

```typescript
import { forwardRef } from 'react';
import { cn } from '@verniz/utils';
import { inputVariants } from './Input.styles';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(inputVariants(), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };
```

## ✅ Boas Práticas

1. **forwardRef**: Sempre usar para refs
2. **CVA**: Usar para variantes
3. **cn utility**: Merge de classes
4. **TypeScript**: Tipos completos
5. **displayName**: Para debugging

---

Estes exemplos demonstram padrões consistentes para componentes shadcn customizados.

