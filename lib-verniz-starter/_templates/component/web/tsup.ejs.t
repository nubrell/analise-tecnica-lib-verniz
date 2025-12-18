---
to: packages/components/<%= h.changeCase.paramCase(name) %>/tsup.config.ts
---
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  dts: {
    compilerOptions: {
      skipLibCheck: true,
    },
  },
  format: ['esm', 'cjs'],
  external: ['react', 'react-dom', 'react/jsx-runtime'],
  sourcemap: true,
  clean: true,
  treeshake: true,
  exclude: ['**/*.spec.tsx', '**/*.stories.tsx'],
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.mjs',
    };
  },
});

