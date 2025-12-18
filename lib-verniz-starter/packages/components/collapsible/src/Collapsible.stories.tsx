import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from './Collapsible';

const meta: Meta<typeof Collapsible> = {
  title: 'Components/Collapsible',
  component: Collapsible,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger className="px-4 py-2 bg-primary text-primary-foreground rounded">
          Toggle
        </CollapsibleTrigger>
        <CollapsibleContent className="mt-2 p-4 border rounded">
          This is collapsible content
        </CollapsibleContent>
      </Collapsible>
    );
  },
};

export const Open: Story = {
  render: () => (
    <Collapsible open={true}>
      <CollapsibleTrigger className="px-4 py-2 bg-primary text-primary-foreground rounded">
        Toggle
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 p-4 border rounded">
        This content is open by default
      </CollapsibleContent>
    </Collapsible>
  ),
};

