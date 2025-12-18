import { forwardRef } from 'react';
import { cn } from './cn';
import { cardVariants, type CardVariants } from './Card.styles';

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CardVariants {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div
        className={cn(cardVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export { Card };
