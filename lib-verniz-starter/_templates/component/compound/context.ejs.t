---
to: packages/components/<%= h.changeCase.paramCase(name) %>/src/<%= h.changeCase.pascalCase(name) %>Context.tsx
---
import { createContext, useContext } from 'react';

export interface <%= h.changeCase.pascalCase(name) %>ContextValue {
  // Add context properties here
}

const <%= h.changeCase.pascalCase(name) %>Context = createContext<<%= h.changeCase.pascalCase(name) %>ContextValue | undefined>(undefined);

export function use<%= h.changeCase.pascalCase(name) %>() {
  const context = useContext(<%= h.changeCase.pascalCase(name) %>Context);
  if (context === undefined) {
    throw new Error(`use<%= h.changeCase.pascalCase(name) %> must be used within a <%= h.changeCase.pascalCase(name) %>`);
  }
  return context;
}

export { <%= h.changeCase.pascalCase(name) %>Context };

