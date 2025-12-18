import * as React from 'react';
import { useState } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from '../cn';
import { useNav } from '../NavContext';
import { NavCollapsible } from '../types';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@nubrell/collapsible';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@nubrell/dropdown-menu';
import { Badge } from '@nubrell/badge';

export interface NavCollapsibleItemProps
  extends React.HTMLAttributes<HTMLElement> {
  item: NavCollapsible;
  linkComponent?: React.ElementType;
  asChild?: boolean;
}

const NavCollapsibleItem = React.forwardRef<
  HTMLDivElement,
  NavCollapsibleItemProps
>(({ item, linkComponent, asChild = false, className }, ref) => {
  const { isCollapsed } = useNav();
  const hasActiveChild = item.items.some((child) => child.isActive);
  const [isOpen, setIsOpen] = useState(hasActiveChild);

  const Comp = asChild ? Slot : linkComponent || 'a';

  // Quando colapsado, mostra apenas o ícone com dropdown
  if (isCollapsed) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            'flex w-full items-center justify-center rounded-md px-3 py-2 text-sm transition-colors',
            'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
            hasActiveChild && 'bg-sidebar-accent text-sidebar-accent-foreground',
            className
          )}
        >
          {item.icon && (
            <span className="h-4 w-4 flex-shrink-0 flex items-center justify-center">
              {item.icon}
            </span>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start" className="min-w-[12rem]">
          {item.items.map((child) => {
            const isActive = child.isActive ?? false;
            return (
              <DropdownMenuItem key={child.url} asChild>
                <Comp
                  href={!asChild ? child.url : undefined}
                  className={cn(
                    'flex items-center gap-2',
                    isActive && 'bg-accent text-accent-foreground'
                  )}
                >
                  {child.icon && (
                    <span className="h-4 w-4 flex-shrink-0 flex items-center justify-center">
                      {child.icon}
                    </span>
                  )}
                  <span>{child.title}</span>
                  {child.badge && (
                    <Badge className="ml-auto rounded-full px-1 py-0 text-xs">
                      {child.badge}
                    </Badge>
                  )}
                </Comp>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  // Quando expandido, mostra o collapsible normal
  return (
    <Collapsible ref={ref} open={isOpen} onOpenChange={setIsOpen}>
      <CollapsibleTrigger
        className={cn(
          'flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
          'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
          hasActiveChild && 'bg-sidebar-accent text-sidebar-accent-foreground',
          className
        )}
      >
        {item.icon && (
          <span className="h-4 w-4 flex-shrink-0 flex items-center justify-center">
            {item.icon}
          </span>
        )}
        <span className="flex-1 text-left">{item.title}</span>
        {item.badge && (
          <Badge className="rounded-full px-1 py-0 text-xs">{item.badge}</Badge>
        )}
        <span
          className={cn(
            'h-4 w-4 flex-shrink-0 transition-transform',
            isOpen && 'rotate-180'
          )}
        >
          ▼
        </span>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-1 space-y-1 pl-4">
        {item.items.map((child) => {
          const isActive = child.isActive ?? false;
          return (
            <Comp
              key={child.url}
              href={!asChild ? child.url : undefined}
              className={cn(
                'flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors',
                'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
                isActive && 'bg-sidebar-accent text-sidebar-accent-foreground'
              )}
            >
              {child.icon && (
                <span className="h-4 w-4 flex-shrink-0 flex items-center justify-center">
                  {child.icon}
                </span>
              )}
              <span className="flex-1">{child.title}</span>
              {child.badge && (
                <Badge className="rounded-full px-1 py-0 text-xs">
                  {child.badge}
                </Badge>
              )}
            </Comp>
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
});

NavCollapsibleItem.displayName = 'NavCollapsibleItem';

export { NavCollapsibleItem };

