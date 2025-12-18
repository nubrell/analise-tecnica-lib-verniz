import { forwardRef } from 'react';
import { cn } from './cn';
import { textVariants, type TextVariants } from './Text.styles';

export interface TextProps
  extends React.HTMLAttributes<HTMLDivElement>,
    TextVariants {}

const Text = forwardRef<HTMLDivElement, TextProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div
        className={cn(textVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';

export { Text };
