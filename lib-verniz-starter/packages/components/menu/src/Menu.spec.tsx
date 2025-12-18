import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Menu } from './Menu';

describe('Menu', () => {
  it('renders correctly', () => {
    render(<Menu>Test</Menu>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies default variant and size', () => {
    render(<Menu>Default</Menu>);
    const element = screen.getByText('Default');
    expect(element).toHaveClass('bg-primary');
  });

  it('applies custom className', () => {
    render(<Menu className="custom-class">Custom</Menu>);
    const element = screen.getByText('Custom');
    expect(element).toHaveClass('custom-class');
  });
});

