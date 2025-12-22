import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip, TooltipTrigger, TooltipContent } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="px-4 py-2 rounded-md border bg-background">
          Passe o mouse aqui
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Esta é uma dica útil!</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const TopSide: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="px-4 py-2 rounded-md border bg-background">
          Tooltip acima
        </button>
      </TooltipTrigger>
      <TooltipContent side="top">
        <p>Aparece acima do elemento</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithOffset: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <button className="px-4 py-2 rounded-md border bg-background">
          Com espaçamento
        </button>
      </TooltipTrigger>
      <TooltipContent sideOffset={10}>
        <p>Tooltip com offset maior</p>
      </TooltipContent>
    </Tooltip>
  ),
};

