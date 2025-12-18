import type { Meta, StoryObj } from '@storybook/react';
import { Buttao } from './Buttao';

const meta: Meta<typeof Buttao> = {
  title: 'Components/Buttao',
  component: Buttao,
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
type Story = StoryObj<typeof Buttao>;

export const Default: Story = {
  args: {
    children: 'Buttao',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Buttao',
  },
};

