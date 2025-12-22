import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import path from 'path';

const config: StorybookConfig = {
  stories: [
    '../src/**/*.mdx',
    '../../../packages/components/**/*.stories.@(js|jsx|mjs|ts|tsx|mdx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@nubrell/utils': path.resolve(__dirname, '../../../packages/utils/src'),
          '@nubrell/theme': path.resolve(__dirname, '../../../packages/theme/src'),
          '@nubrell/badge': path.resolve(__dirname, '../../../packages/components/badge/src'),
          '@nubrell/avatar': path.resolve(__dirname, '../../../packages/components/avatar/src'),
          '@nubrell/collapsible': path.resolve(__dirname, '../../../packages/components/collapsible/src'),
          '@nubrell/dropdown-menu': path.resolve(__dirname, '../../../packages/components/dropdown-menu/src'),
          '@nubrell/nav': path.resolve(__dirname, '../../../packages/components/nav/src'),
          '@nubrell/button': path.resolve(__dirname, '../../../packages/components/button/src'),
          '@nubrell/input': path.resolve(__dirname, '../../../packages/components/input/src'),
          '@nubrell/label': path.resolve(__dirname, '../../../packages/components/label/src'),
          '@nubrell/select': path.resolve(__dirname, '../../../packages/components/select/src'),
          '@nubrell/dialog': path.resolve(__dirname, '../../../packages/components/dialog/src'),
          '@nubrell/table': path.resolve(__dirname, '../../../packages/components/table/src'),
          '@nubrell/tabs': path.resolve(__dirname, '../../../packages/components/tabs/src'),
          '@nubrell/tooltip': path.resolve(__dirname, '../../../packages/components/tooltip/src'),
        },
      },
      server: {
        fs: {
          // Permite que o Vite leia arquivos de toda a raiz do monorepo
          allow: [path.resolve(__dirname, '../../..')],
        },
      },
      optimizeDeps: {
        include: [
          'react',
          'react-dom',
          'react/jsx-runtime',
          'class-variance-authority',
          'clsx',
          'tailwind-merge',
        ],
        esbuildOptions: {
          jsx: 'automatic',
        },
      },
    });
  },
};

export default config;

