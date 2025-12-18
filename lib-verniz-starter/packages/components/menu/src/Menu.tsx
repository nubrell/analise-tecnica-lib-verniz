import { forwardRef } from 'react';
import { cn } from './cn';
import { menuVariants, type MenuVariants } from './Menu.styles';

export interface MenuProps
  extends React.HTMLAttributes<HTMLDivElement>,
    MenuVariants {}

const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div
        className={cn(menuVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Menu.displayName = 'Menu';

export { Menu };
