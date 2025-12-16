---
to: packages/components/<%= h.changeCase.paramCase(name) %>/src/<%= h.changeCase.pascalCase(name) %>.stories.tsx
---
import type { Meta, StoryObj } from '@storybook/react';
import { <%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) %>';

const meta: Meta<typeof <%= h.changeCase.pascalCase(name) %>> = {
  title: 'Components/<%= h.changeCase.pascalCase(name) %>',
  component: <%= h.changeCase.pascalCase(name) %>,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof <%= h.changeCase.pascalCase(name) %>>;

export const Default: Story = {
  args: {
    children: '<%= h.changeCase.pascalCase(name) %>',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: '<%= h.changeCase.pascalCase(name) %>',
  },
};

