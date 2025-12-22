import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.tsx'],
  dts: {
    compilerOptions: {
      skipLibCheck: true,
      skipDefaultLibCheck: true,
      types: [],
    },
  },
  format: ['esm', 'cjs'],
  external: ['react', 'react-dom', 'react/jsx-runtime', '@radix-ui/react-select'],
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
