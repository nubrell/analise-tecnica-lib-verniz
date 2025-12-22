import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect } from 'vitest';
import { Tooltip, TooltipTrigger, TooltipContent } from './Tooltip';

describe('Tooltip', () => {
  it('renders trigger correctly', () => {
    render(
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Tooltip text</TooltipContent>
      </Tooltip>
    );
    expect(screen.getByText('Hover me')).toBeInTheDocument();
  });

  it('shows tooltip content on hover', async () => {
    const user = userEvent.setup();
    render(
      <Tooltip>
        <TooltipTrigger>Hover me</TooltipTrigger>
        <TooltipContent>Tooltip text</TooltipContent>
      </Tooltip>
    );
    
    const trigger = screen.getByText('Hover me');
    await user.hover(trigger);
    
    // Tooltip pode aparecer com delay, então esperar aparecer
    expect(await screen.findByText('Tooltip text')).toBeInTheDocument();
  });

  it('has correct data-slot attribute on trigger', () => {
    const { container } = render(
      <Tooltip>
        <TooltipTrigger>Trigger</TooltipTrigger>
        <TooltipContent>Content</TooltipContent>
      </Tooltip>
    );
    expect(container.querySelector('[data-slot="tooltip-trigger"]')).toBeInTheDocument();
  });
});

