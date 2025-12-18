import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Nav } from './Nav';

const mockGroups = [
  {
    title: 'Main',
    items: [
      {
        title: 'Home',
        url: '/home',
        isActive: true,
      },
      {
        title: 'About',
        url: '/about',
      },
    ],
  },
];

describe('Nav', () => {
  it('renders correctly', () => {
    render(<Nav groups={mockGroups} />);
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
  });

  it('renders group title when not collapsed', () => {
    render(<Nav groups={mockGroups} isCollapsed={false} />);
    expect(screen.getByText('Main')).toBeInTheDocument();
  });

  it('hides group title when collapsed', () => {
    render(<Nav groups={mockGroups} isCollapsed={true} />);
    expect(screen.queryByText('Main')).not.toBeInTheDocument();
  });
});

