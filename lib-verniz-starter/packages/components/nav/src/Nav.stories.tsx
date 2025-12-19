import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Nav } from './Nav/Nav';
import { Home, Settings, Users, FileText, ChevronDown } from 'lucide-react';

const meta: Meta<typeof Nav> = {
  title: 'Components/Nav',
  component: Nav,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Nav>;

const mockGroups = [
  {
    title: 'Main',
    items: [
      {
        title: 'Home',
        url: '/home',
        icon: <Home className="h-4 w-4" />,
        isActive: true,
      },
      {
        title: 'Documents',
        url: '/documents',
        icon: <FileText className="h-4 w-4" />,
        badge: '12',
      },
    ],
  },
  {
    title: 'Settings',
    items: [
      {
        title: 'Users',
        icon: <Users className="h-4 w-4" />,
        items: [
          {
            title: 'All Users',
            url: '/users',
            icon: <Users className="h-4 w-4" />,
          },
          {
            title: 'Roles',
            url: '/users/roles',
            icon: <Settings className="h-4 w-4" />,
          },
        ],
      },
      {
        title: 'Settings',
        url: '/settings',
        icon: <Settings className="h-4 w-4" />,
      },
    ],
  },
];

export const Default: Story = {
  render: () => (
    <div className="h-screen w-64">
      <Nav groups={mockGroups} isCollapsed={false} />
    </div>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <div className="h-screen w-16">
      <Nav groups={mockGroups} isCollapsed={true} />
    </div>
  ),
};

export const Interactive: Story = {
  render: () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return (
      <div className="h-screen flex">
        <Nav groups={mockGroups} isCollapsed={isCollapsed} />
        <div className="flex-1 p-4">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="px-4 py-2 bg-primary text-primary-foreground rounded"
          >
            Toggle Collapse
          </button>
        </div>
      </div>
    );
  },
};

