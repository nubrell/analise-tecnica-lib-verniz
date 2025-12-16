import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input>Test</Input>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies default variant and size', () => {
    render(<Input>Default</Input>);
    const element = screen.getByText('Default');
    expect(element).toHaveClass('bg-primary');
  });

  it('applies custom className', () => {
    render(<Input className="custom-class">Custom</Input>);
    const element = screen.getByText('Custom');
    expect(element).toHaveClass('custom-class');
  });
});

