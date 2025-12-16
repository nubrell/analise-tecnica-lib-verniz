# Configuração Storybook - Guia Completo

## 📋 Setup Inicial

### Instalação

```bash
cd apps/docs
npx storybook@latest init
```

### Estrutura Criada

```
apps/docs/
├── .storybook/
│   ├── main.ts
│   └── preview.tsx
└── src/
    └── pages/
```

## ⚙️ Configuração com Tailwind CSS

### main.ts

```typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/pages/**/*.@(mdx|tsx)',
    '../../../packages/components/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)'
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    '@storybook/addon-a11y'
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  docs: {
    autodocs: 'tag'
  },
  async viteFinal(config) {
    return {
      ...config,
      // Configurações Vite customizadas
    };
  }
};

export default config;
```

### preview.tsx

```typescript
import type { Preview } from '@storybook/react';
import '../src/styles/globals.css'; // Tailwind CSS

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    docs: {
      toc: true
    }
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    )
  ]
};

export default preview;
```

## 🎨 Configuração Tailwind

### tailwind.config.js

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../../../packages/components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      // Seu tema customizado
    }
  },
  plugins: []
};
```

### Importar CSS

```typescript
// .storybook/preview.tsx
import '../../../packages/components/button/src/styles.css';
```

## 📝 Exemplo de Story

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@verniz/button';

const meta = {
  component: Button,
  title: 'Components/Button',
  parameters: {
    docs: {
      description: {
        component: 'Button component description'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive']
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg']
    }
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button'
  }
};
```

## ✅ Checklist

- [ ] Storybook instalado
- [ ] Configuração básica
- [ ] Tailwind CSS configurado
- [ ] Addons instalados
- [ ] Stories criadas
- [ ] Deploy configurado

---

Esta configuração garante Storybook funcionando perfeitamente com Tailwind CSS e componentes shadcn.

