import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { List } from './List';

describe('List', () => {
  it('renders correctly', () => {
    render(<List>Test</List>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies default variant and size', () => {
    render(<List>Default</List>);
    const element = screen.getByText('Default');
    expect(element).toHaveClass('bg-primary');
  });

  it('applies custom className', () => {
    render(<List className="custom-class">Custom</List>);
    const element = screen.getByText('Custom');
    expect(element).toHaveClass('custom-class');
  });
});

