import { forwardRef } from 'react';
import { cn } from './cn';
import { listVariants, type ListVariants } from './List.styles';

export interface ListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ListVariants {}

const List = forwardRef<HTMLDivElement, ListProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div
        className={cn(listVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

List.displayName = 'List';

export { List };
