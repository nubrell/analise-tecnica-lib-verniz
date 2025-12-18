import type { Meta, StoryObj } from '@storybook/react';
import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Components/Grisd',
  component: Grid,
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
type Story = StoryObj<typeof Grid>;

export const Default: Story = {
  args: {
    children: 'Grisd',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Grisd',
  },
};

