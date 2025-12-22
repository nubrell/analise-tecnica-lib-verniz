import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url', 'search'],
      description: 'Tipo do input',
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder',
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o input',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: 'Digite algo...',
  },
};

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'email@exemplo.com',
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Senha',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Input desabilitado',
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    value: 'Valor preenchido',
    readOnly: true,
  },
};

export const Invalid: Story = {
  args: {
    placeholder: 'Email inválido',
    'aria-invalid': true,
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    placeholder: '0',
  },
};

export const Search: Story = {
  args: {
    type: 'search',
    placeholder: 'Buscar...',
  },
};

