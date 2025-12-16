---
to: packages/components/<%= h.changeCase.paramCase(name) %>/tsconfig.json
---
{
  "extends": "@verniz/typescript-config/react-library.json",
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}

