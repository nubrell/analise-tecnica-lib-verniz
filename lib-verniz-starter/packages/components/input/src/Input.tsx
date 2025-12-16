import { forwardRef } from 'react';
import { cn } from '@verniz/utils';
import { inputVariants, type InputVariants } from './Input.styles';

export interface InputProps
  extends React.HTMLAttributes<HTMLDivElement>,
    InputVariants {}

const Input = forwardRef<HTMLDivElement, InputProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div
        className={cn(inputVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };

