---
to: packages/components/<%= h.changeCase.paramCase(name) %>/src/<%= h.changeCase.pascalCase(subComponent) %>/<%= h.changeCase.pascalCase(subComponent) %>.tsx
---
import { forwardRef } from 'react';
import { cn } from '../cn';
import { <%= h.changeCase.camelCase(subComponent) %>Variants, type <%= h.changeCase.pascalCase(subComponent) %>Variants } from './<%= h.changeCase.pascalCase(subComponent) %>.styles';

export interface <%= h.changeCase.pascalCase(subComponent) %>Props
  extends React.HTMLAttributes<HTMLDivElement>,
    <%= h.changeCase.pascalCase(subComponent) %>Variants {}

const <%= h.changeCase.pascalCase(subComponent) %> = forwardRef<HTMLDivElement, <%= h.changeCase.pascalCase(subComponent) %>Props>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div
        className={cn(<%= h.changeCase.camelCase(subComponent) %>Variants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

<%= h.changeCase.pascalCase(subComponent) %>.displayName = '<%= h.changeCase.pascalCase(subComponent) %>';

export { <%= h.changeCase.pascalCase(subComponent) %> };

