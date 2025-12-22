import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Label padrão',
  },
};

export const WithInput: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Label htmlFor="email">Email</Label>
      <input
        id="email"
        type="email"
        placeholder="seu@email.com"
        className="h-9 w-full rounded-md border px-3"
      />
    </div>
  ),
};

export const WithCheckbox: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <input id="terms" type="checkbox" />
      <Label htmlFor="terms">Aceito os termos e condições</Label>
    </div>
  ),
};

export const Required: Story = {
  render: () => (
    <Label>
      Nome completo
      <span className="text-destructive ml-1">*</span>
    </Label>
  ),
};

