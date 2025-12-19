---
to: packages/components/<%= h.changeCase.paramCase(name) %>/src/index.tsx
---
export { <%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>';
export type { <%= h.changeCase.pascalCase(name) %>Props } from './<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>';
export { <%= h.changeCase.camelCase(name) %>Variants } from './<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.styles';
export type { <%= h.changeCase.pascalCase(name) %>Variants } from './<%= h.changeCase.pascalCase(name) %>/<%= h.changeCase.pascalCase(name) %>.styles';
<% 
// Processa subComponents - pode vir como array ou string JSON
let subComponentsArray = [];
if (typeof subComponents === 'string') {
  try {
    subComponentsArray = JSON.parse(subComponents);
  } catch (e) {
    subComponentsArray = subComponents.split(',').map((s) => s.trim()).filter(Boolean);
  }
} else if (Array.isArray(subComponents)) {
  subComponentsArray = subComponents;
}

if (subComponentsArray.length > 0) {
  subComponentsArray.forEach(function(subComponent) {
    const subComponentPascal = h.changeCase.pascalCase(subComponent);
    const subComponentCamel = h.changeCase.camelCase(subComponent);
%>
export { <%= subComponentPascal %> } from './<%= subComponentPascal %>/<%= subComponentPascal %>';
export type { <%= subComponentPascal %>Props } from './<%= subComponentPascal %>/<%= subComponentPascal %>';
export { <%= subComponentCamel %>Variants } from './<%= subComponentPascal %>/<%= subComponentPascal %>.styles';
export type { <%= subComponentPascal %>Variants } from './<%= subComponentPascal %>/<%= subComponentPascal %>.styles';
<% 
  });
}
%>
export { <%= h.changeCase.pascalCase(name) %>Context, use<%= h.changeCase.pascalCase(name) %> } from './<%= h.changeCase.pascalCase(name) %>Context';
export type { <%= h.changeCase.pascalCase(name) %>ContextValue } from './<%= h.changeCase.pascalCase(name) %>Context';
export type * from './types';

