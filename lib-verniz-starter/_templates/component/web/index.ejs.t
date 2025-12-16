---
to: packages/components/<%= h.changeCase.paramCase(name) %>/src/index.tsx
---
export { <%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) %>';
export type { <%= h.changeCase.pascalCase(name) %>Props } from './<%= h.changeCase.pascalCase(name) %>';
export { <%= h.changeCase.camelCase(name) %>Variants } from './<%= h.changeCase.pascalCase(name) %>.styles';
export type { <%= h.changeCase.pascalCase(name) %>Variants } from './<%= h.changeCase.pascalCase(name) %>.styles';

