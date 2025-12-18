import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Table } from './Table';

describe('Table', () => {
  it('renders correctly', () => {
    render(<Table>Test</Table>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies default variant and size', () => {
    render(<Table>Default</Table>);
    const element = screen.getByText('Default');
    expect(element).toHaveClass('bg-primary');
  });

  it('applies custom className', () => {
    render(<Table className="custom-class">Custom</Table>);
    const element = screen.getByText('Custom');
    expect(element).toHaveClass('custom-class');
  });
});

