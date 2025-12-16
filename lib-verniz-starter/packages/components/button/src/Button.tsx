import { forwardRef } from 'react';
// TODO: Trocar para @verniz/utils após workspaces estarem configurados
// import { cn } from '@verniz/utils';
import { cn } from './cn';
import { buttonVariants, type ButtonVariants } from './Button.styles';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariants {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button };

