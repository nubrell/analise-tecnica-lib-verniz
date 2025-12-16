---
to: packages/components/<%= h.changeCase.paramCase(name) %>/src/<%= h.changeCase.pascalCase(name) %>.spec.tsx
---
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { <%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) %>';

describe('<%= h.changeCase.pascalCase(name) %>', () => {
  it('renders correctly', () => {
    render(<<%= h.changeCase.pascalCase(name) %>>Test</<%= h.changeCase.pascalCase(name) %>>);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('applies default variant and size', () => {
    render(<<%= h.changeCase.pascalCase(name) %>>Default</<%= h.changeCase.pascalCase(name) %>>);
    const element = screen.getByText('Default');
    expect(element).toHaveClass('bg-primary');
  });

  it('applies custom className', () => {
    render(<<%= h.changeCase.pascalCase(name) %> className="custom-class">Custom</<%= h.changeCase.pascalCase(name) %>>);
    const element = screen.getByText('Custom');
    expect(element).toHaveClass('custom-class');
  });
});

