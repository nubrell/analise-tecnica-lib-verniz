# Estratégia de Testes - Biblioteca Verniz

## 🎯 Abordagem

### 1. Testes Unitários

- Testar componentes isoladamente
- Testar props e variantes
- Testar estados (disabled, loading)
- Cobertura: 80%+

### 2. Testes de Integração

- Testar interações entre componentes
- Testar fluxos completos
- Testar acessibilidade

### 3. Testes Visuais

- Storybook + Chromatic
- Screenshots automáticos
- Detecção de regressões

## 📝 Exemplos

### Teste de Componente

```typescript
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies variant styles', () => {
    const { container } = render(
      <Button variant="secondary">Button</Button>
    );
    expect(container.firstChild).toHaveClass('bg-secondary');
  });
});
```

## ✅ Checklist

- [ ] Testes unitários escritos
- [ ] Cobertura > 80%
- [ ] Testes de integração
- [ ] Testes visuais configurados

---

Estratégia de testes garante qualidade e confiabilidade dos componentes.

