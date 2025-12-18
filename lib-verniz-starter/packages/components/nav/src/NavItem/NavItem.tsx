import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../cn';
import { useNav } from '../NavContext';
import { NavLink } from '../types';

export interface NavItemProps extends React.HTMLAttributes<HTMLElement> {
  item: NavLink;
  linkComponent?: React.ElementType;
  asChild?: boolean;
}

const NavItem = React.forwardRef<HTMLElement, NavItemProps>(
  ({ item, linkComponent, asChild = false, className, ...props }, ref) => {
    const { isCollapsed } = useNav();
    const isActive = item.isActive ?? false;

    const Comp = asChild ? Slot : linkComponent || 'a';

    return (
      <Comp
        ref={ref}
        href={!asChild ? item.url : undefined}
        className={cn(
          'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
          'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
          isActive && 'bg-sidebar-accent text-sidebar-accent-foreground',
          isCollapsed && 'justify-center',
          className
        )}
        {...props}
      >
        {item.icon && (
          <span className="h-4 w-4 flex-shrink-0 flex items-center justify-center">
            {item.icon}
          </span>
        )}
        {!isCollapsed && (
          <>
            <span className="flex-1">{item.title}</span>
            {item.badge && (
              <span className="rounded-full px-1 py-0 text-xs bg-sidebar-accent">
                {item.badge}
              </span>
            )}
          </>
        )}
      </Comp>
    );
  }
);

NavItem.displayName = 'NavItem';

export { NavItem };

