# Configuração Tailwind CSS

## 📋 Setup Inicial

### Instalação

```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### Configuração Básica

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../packages/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        // ... mais cores
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      }
    }
  },
  plugins: []
};
```

### CSS Base

```css
/* src/styles/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    /* ... mais variáveis */
  }
}
```

## ✅ Checklist

- [ ] Tailwind instalado
- [ ] Configuração criada
- [ ] CSS base configurado
- [ ] Variáveis CSS definidas
- [ ] Testado localmente

---

Esta configuração garante Tailwind CSS funcionando perfeitamente com shadcn/ui.

