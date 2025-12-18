import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Avatar, AvatarImage, AvatarFallback } from './Avatar';

describe('Avatar', () => {
  it('renders correctly', () => {
    render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('renders with image and fallback', () => {
    render(
      <Avatar>
        <AvatarImage src="https://example.com/avatar.jpg" alt="User" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    );
    const image = screen.getByAltText('User');
    expect(image).toBeInTheDocument();
    expect(screen.getByText('AB')).toBeInTheDocument();
  });

  it('applies custom className', () => {
    render(
      <Avatar className="custom-class">
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    );
    const avatar = screen.getByText('AB').closest('[data-slot="avatar"]');
    expect(avatar).toHaveClass('custom-class');
  });
});

