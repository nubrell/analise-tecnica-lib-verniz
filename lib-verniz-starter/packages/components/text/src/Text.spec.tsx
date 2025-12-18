import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Text } from './Text';

describe('Text', () => {
  it('renders correctly', () => {
    render(<Text>Test</Text>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies default variant and size', () => {
    render(<Text>Default</Text>);
    const element = screen.getByText('Default');
    expect(element).toHaveClass('bg-primary');
  });

  it('applies custom className', () => {
    render(<Text className="custom-class">Custom</Text>);
    const element = screen.getByText('Custom');
    expect(element).toHaveClass('custom-class');
  });
});

