---
to: packages/components/<%= h.changeCase.paramCase(name) %>/src/<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.tsx
---
import { forwardRef } from 'react';
import { cn } from '../cn';
import { <%= h.changeCase.camelCase(name) %>Variants, type <%= h.changeCase.pascalCase(name) %>Variants } from './<%= h.changeCase.pascalCase(name) %>.styles';

export interface <%= h.changeCase.pascalCase(name) %>Props
  extends React.HTMLAttributes<HTMLDivElement>,
    <%= h.changeCase.pascalCase(name) %>Variants {}

const <%= h.changeCase.pascalCase(name) %> = forwardRef<HTMLDivElement, <%= h.changeCase.pascalCase(name) %>Props>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div
        className={cn(<%= h.changeCase.camelCase(name) %>Variants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

<%= h.changeCase.pascalCase(name) %>.displayName = '<%= h.changeCase.pascalCase(name) %>';

export { <%= h.changeCase.pascalCase(name) %> };

