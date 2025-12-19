import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from './Card';

describe('Card', () => {
  it('renders correctly', () => {
    render(<Card>Test</Card>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies default variant and size', () => {
    render(<Card>Default</Card>);
    const element = screen.getByText('Default');
    expect(element).toHaveClass('bg-primary');
  });

  it('applies custom className', () => {
    render(<Card className="custom-class">Custom</Card>);
    const element = screen.getByText('Custom');
    expect(element).toHaveClass('custom-class');
  });
});

