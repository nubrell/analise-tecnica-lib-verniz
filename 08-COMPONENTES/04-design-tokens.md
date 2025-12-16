# Design Tokens - Biblioteca Verniz

## 🎨 Tokens com Tailwind CSS

### Cores

```javascript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      border: 'hsl(var(--border))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))'
      },
      // ... mais cores
    }
  }
}
```

### Variáveis CSS

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... mais variáveis */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... variáveis dark mode */
}
```

## 📦 Pacote de Theme

```
packages/theme/
├── src/
│   ├── colors.ts
│   ├── spacing.ts
│   ├── typography.ts
│   └── index.ts
└── package.json
```

## ✅ Checklist

- [ ] Tokens definidos
- [ ] Variáveis CSS configuradas
- [ ] Dark mode suportado
- [ ] Pacote theme criado

---

Design tokens garantem consistência visual em toda a biblioteca.

