import * as React from 'react';
import { cn } from '../cn';
import { useNav } from '../NavContext';
import { NavGroup as NavGroupType } from '../types';
import { NavItem as NavItemComponent } from '../NavItem/NavItem';
import { NavCollapsibleItem } from '../NavCollapsibleItem/NavCollapsibleItem';

export interface NavGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  group: NavGroupType;
  linkComponent?: React.ElementType;
}

const NavGroup = React.forwardRef<HTMLDivElement, NavGroupProps>(
  ({ group, linkComponent, className, ...props }, ref) => {
    const { isCollapsed } = useNav();

    return (
      <div ref={ref} className={cn('space-y-1', className)} {...props}>
        {!isCollapsed && (
          <div className="px-3 py-2 text-xs font-semibold text-sidebar-foreground/70">
            {group.title}
          </div>
        )}
        <div className="space-y-1">
          {group.items.map((item) => {
            if ('url' in item && item.url) {
              return (
                <NavItemComponent
                  key={`${item.title}-${item.url}`}
                  item={item}
                  linkComponent={linkComponent}
                />
              );
            }
            if ('items' in item && item.items) {
              return (
                <NavCollapsibleItem
                  key={item.title}
                  item={item}
                  linkComponent={linkComponent}
                />
              );
            }
            return null;
          })}
        </div>
      </div>
    );
  }
);

NavGroup.displayName = 'NavGroup';

export { NavGroup };

