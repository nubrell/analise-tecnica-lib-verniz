import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Grid } from './Grid';

describe('Grid', () => {
  it('renders correctly', () => {
    render(<Grid>Test</Grid>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies default variant and size', () => {
    render(<Grid>Default</Grid>);
    const element = screen.getByText('Default');
    expect(element).toHaveClass('bg-primary');
  });

  it('applies custom className', () => {
    render(<Grid className="custom-class">Custom</Grid>);
    const element = screen.getByText('Custom');
    expect(element).toHaveClass('custom-class');
  });
});

