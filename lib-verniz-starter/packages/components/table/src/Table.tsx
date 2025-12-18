import { forwardRef } from 'react';
import { cn } from './cn';
import { tableVariants, type TableVariants } from './Table.styles';

export interface TableProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TableVariants {}

const Table = forwardRef<HTMLDivElement, TableProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div
        className={cn(tableVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Table.displayName = 'Table';

export { Table };
