---
to: packages/components/<%= h.changeCase.paramCase(name) %>/src/index.tsx
---
export { <%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>';
export type { <%= h.changeCase.pascalCase(name) %>Props } from './<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>';
export { <%= h.changeCase.camelCase(name) %>Variants } from './<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.styles';
export type { <%= h.changeCase.pascalCase(name) %>Variants } from './<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.styles';
<% subComponents.forEach(function(subComponent) { %>
export { <%= h.changeCase.pascalCase(subComponent) %> } from './<%= h.changeCase.pascalCase(subComponent) %>/<%= h.changeCase.pascalCase(subComponent) %>';
export type { <%= h.changeCase.pascalCase(subComponent) %>Props } from './<%= h.changeCase.pascalCase(subComponent) %>/<%= h.changeCase.pascalCase(subComponent) %>';
export { <%= h.changeCase.camelCase(subComponent) %>Variants } from './<%= h.changeCase.pascalCase(subComponent) %>/<%= h.changeCase.pascalCase(subComponent) %>.styles';
export type { <%= h.changeCase.pascalCase(subComponent) %>Variants } from './<%= h.changeCase.pascalCase(subComponent) %>/<%= h.changeCase.pascalCase(subComponent) %>.styles';
<% }); %>
export { <%= h.changeCase.pascalCase(name) %>Context, use<%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) %>Context';
export type { <%= h.changeCase.pascalCase(name) %>ContextValue } from './<%= h.changeCase.pascalCase(name) %>Context';
export type * from './types';

