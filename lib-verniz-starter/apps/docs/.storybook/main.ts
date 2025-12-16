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
          '@verniz/utils': path.resolve(__dirname, '../../../packages/utils/src'),
          '@verniz/theme': path.resolve(__dirname, '../../../packages/theme/src'),
          '@verniz/button': path.resolve(__dirname, '../../../packages/components/button/src'),
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

