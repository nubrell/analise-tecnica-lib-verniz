---
to: packages/components/<%= h.changeCase.paramCase(name) %>/package.json
---
{
  "name": "@verniz/<%= h.changeCase.paramCase(name) %>",
  "version": "0.0.1",
  "description": "<%= h.changeCase.pascalCase(name) %> component for Verniz",
  "main": "./dist/index.cjs",
  "module": "./dist/index.mjs",
  "types": "./dist/index.d.ts",
  "exports": {
    ".": {
      "import": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.mjs"
      },
      "require": {
        "types": "./dist/index.d.ts",
        "default": "./dist/index.cjs"
      }
    }
  },
  "files": [
    "dist/**"
  ],
  "sideEffects": false,
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "test": "vitest run",
    "test:watch": "vitest",
    "lint": "eslint src --ext .ts,.tsx"
  },
  "dependencies": {
    "@verniz/utils": "0.0.1",
    "@verniz/theme": "0.0.1",
    "class-variance-authority": "^0.7.0"
  },
  "peerDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@storybook/react": "^7.6.0",
    "@testing-library/jest-dom": "^6.1.5",
    "@testing-library/react": "^14.1.2",
    "@types/react": "^18.2.48",
    "@types/react-dom": "^18.2.18",
    "@verniz/typescript-config": "0.0.1",
    "@vitejs/plugin-react": "^4.2.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tsup": "^8.0.1",
    "typescript": "^5.4.5",
    "vitest": "^1.1.0",
    "jsdom": "^23.0.1"
  }
}

