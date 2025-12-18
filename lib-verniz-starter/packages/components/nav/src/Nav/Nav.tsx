import * as React from 'react';
import { cn } from '../cn';
import { NavContext } from '../NavContext';
import { NavGroup as NavGroupComponent } from '../NavGroup/NavGroup';
import { NavGroup } from '../types';

export interface NavProps extends React.HTMLAttributes<HTMLDivElement> {
  isCollapsed?: boolean;
  groups: NavGroup[];
  linkComponent?: React.ElementType;
}

const Nav = React.forwardRef<HTMLDivElement, NavProps>(
  (
    { isCollapsed = false, groups, linkComponent, className, children, ...props },
    ref
  ) => {
    return (
      <NavContext.Provider value={{ isCollapsed }}>
        <nav
          ref={ref}
          className={cn(
            'flex flex-col h-full bg-sidebar text-sidebar-foreground border-r border-sidebar-border',
            className
          )}
          {...props}
        >
          {children}
          <div className="flex-1 overflow-auto p-2">
            {groups.map((group) => (
              <NavGroupComponent
                key={group.title}
                group={group}
                linkComponent={linkComponent}
              />
            ))}
          </div>
        </nav>
      </NavContext.Provider>
    );
  }
);

Nav.displayName = 'Nav';

export { Nav };

