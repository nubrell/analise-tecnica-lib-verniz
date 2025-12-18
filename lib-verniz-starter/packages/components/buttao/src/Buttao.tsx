import { forwardRef } from 'react';
import { cn } from './cn';
import { buttaoVariants, type ButtaoVariants } from './Buttao.styles';

export interface ButtaoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    ButtaoVariants {}

const Buttao = forwardRef<HTMLDivElement, ButtaoProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div
        className={cn(buttaoVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Buttao.displayName = 'Buttao';

export { Buttao };

