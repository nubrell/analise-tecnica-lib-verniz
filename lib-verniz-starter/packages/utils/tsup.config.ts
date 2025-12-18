import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  dts: {
    compilerOptions: {
      skipLibCheck: true,
      skipDefaultLibCheck: true,
      types: [],
    },
  },
  format: ['esm', 'cjs'],
  sourcemap: true,
  clean: true,
  treeshake: true,
  outExtension({ format }) {
    return {
      js: format === 'cjs' ? '.cjs' : '.mjs',
    };
  },
});

