import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Input } from './Input';

describe('Input', () => {
  it('renders correctly', () => {
    render(<Input placeholder="Test input" />);
    expect(screen.getByPlaceholderText('Test input')).toBeInTheDocument();
  });

  it('applies default type text', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'text');
  });

  it('applies custom type', () => {
    render(<Input type="email" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('type', 'email');
  });

  it('applies custom className', () => {
    render(<Input className="custom-class" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveClass('custom-class');
  });

  it('handles disabled state', () => {
    render(<Input disabled />);
    const input = screen.getByRole('textbox');
    expect(input).toBeDisabled();
  });

  it('handles user input', async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Type here" />);
    const input = screen.getByPlaceholderText('Type here');
    await user.type(input, 'Hello');
    expect(input).toHaveValue('Hello');
  });

  it('handles onChange events', async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(<Input onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'Test');
    expect(handleChange).toHaveBeenCalled();
  });

  it('accepts defaultValue', () => {
    render(<Input defaultValue="Initial value" />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('Initial value');
  });

  it('accepts controlled value', () => {
    render(<Input value="Controlled" readOnly />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('Controlled');
  });

  it('has correct data-slot attribute', () => {
    render(<Input />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('data-slot', 'input');
  });

  it('supports aria-invalid', () => {
    render(<Input aria-invalid />);
    const input = screen.getByRole('textbox');
    expect(input).toHaveAttribute('aria-invalid', 'true');
  });

  it('forwards ref correctly', () => {
    const ref = vi.fn();
    render(<Input ref={ref} />);
    expect(ref).toHaveBeenCalled();
  });
});

