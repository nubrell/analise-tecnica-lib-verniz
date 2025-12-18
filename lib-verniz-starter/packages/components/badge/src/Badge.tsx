import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cn } from './cn';
import { badgeVariants, type BadgeVariants } from './Badge.styles';

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    BadgeVariants {
  asChild?: boolean;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'span';
    return (
      <Comp
        data-slot='badge'
        className={cn(badgeVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };

