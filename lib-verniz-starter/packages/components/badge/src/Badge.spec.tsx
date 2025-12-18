import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Badge } from './Badge';

describe('Badge', () => {
  it('renders correctly', () => {
    render(<Badge>Test</Badge>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies default variant', () => {
    render(<Badge>Default</Badge>);
    const element = screen.getByText('Default');
    expect(element).toHaveClass('bg-primary');
  });

  it('applies custom variant', () => {
    render(<Badge variant="destructive">Destructive</Badge>);
    const element = screen.getByText('Destructive');
    expect(element).toHaveClass('bg-destructive');
  });

  it('applies custom className', () => {
    render(<Badge className="custom-class">Custom</Badge>);
    const element = screen.getByText('Custom');
    expect(element).toHaveClass('custom-class');
  });
});

