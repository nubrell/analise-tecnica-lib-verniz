import { forwardRef } from 'react';
import { cn } from './cn';
import { gridVariants, type GridVariants } from './Grid.styles';

export interface GridProps
  extends React.HTMLAttributes<HTMLDivElement>,
    GridVariants {}

const Grid = forwardRef<HTMLDivElement, GridProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div
        className={cn(gridVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Grid.displayName = 'Grid';

export { Grid };
