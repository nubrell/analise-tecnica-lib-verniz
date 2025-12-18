import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Buttao } from './Buttao';

describe('Buttao', () => {
  it('renders correctly', () => {
    render(<Buttao>Test</Buttao>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies default variant and size', () => {
    render(<Buttao>Default</Buttao>);
    const element = screen.getByText('Default');
    expect(element).toHaveClass('bg-primary');
  });

  it('applies custom className', () => {
    render(<Buttao className="custom-class">Custom</Buttao>);
    const element = screen.getByText('Custom');
    expect(element).toHaveClass('custom-class');
  });
});

