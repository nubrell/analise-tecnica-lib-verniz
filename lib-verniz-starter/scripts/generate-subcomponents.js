#!/usr/bin/env node

/**
 * Script para gerar arquivos de subcomponentes após o Hygen criar o componente compound
 * Uso: node scripts/generate-subcomponents.js <component-name> <subcomponents-json>
 */

const fs = require("fs");
const path = require("path");

const componentName = process.argv[2];
const subComponentsJson = process.argv[3];

if (!componentName || !subComponentsJson) {
  console.error(
    "❌ Uso: node scripts/generate-subcomponents.js <component-name> <subcomponents-json>"
  );
  process.exit(1);
}

let subComponents;
try {
  subComponents = JSON.parse(subComponentsJson);
} catch (e) {
  // Se não for JSON válido, tenta como string separada por vírgulas
  subComponents = subComponentsJson
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);
}

if (!Array.isArray(subComponents) || subComponents.length === 0) {
  console.error("❌ subComponents deve ser um array válido");
  process.exit(1);
}

const componentPath = path.join(
  __dirname,
  "..",
  "packages",
  "components",
  componentName,
  "src"
);

// Função para converter para PascalCase
function toPascalCase(str) {
  return str
    .split(/[-_\s]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("");
}

// Função para converter para camelCase
function toCamelCase(str) {
  const pascal = toPascalCase(str);
  return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

// Template para o arquivo do subcomponente
const subcomponentTemplate = (
  subComponent
) => `import { forwardRef } from 'react';
import { cn } from '../cn';
import { ${toCamelCase(subComponent)}Variants, type ${toPascalCase(
  subComponent
)}Variants } from './${toPascalCase(subComponent)}.styles';

export interface ${toPascalCase(subComponent)}Props
  extends React.HTMLAttributes<HTMLDivElement>,
    ${toPascalCase(subComponent)}Variants {}

const ${toPascalCase(subComponent)} = forwardRef<HTMLDivElement, ${toPascalCase(
  subComponent
)}Props>(
  ({ className, variant = 'default', size = 'md', ...props }, ref) => {
    return (
      <div
        className={cn(${toCamelCase(
          subComponent
        )}Variants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);

${toPascalCase(subComponent)}.displayName = '${toPascalCase(subComponent)}';

export { ${toPascalCase(subComponent)} };
`;

// Template para o arquivo de estilos do subcomponente
const subcomponentStylesTemplate = (
  subComponent
) => `import { cva, type VariantProps } from 'class-variance-authority';

const ${toCamelCase(subComponent)}Variants = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        sm: 'h-9 px-3 text-sm',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export type ${toPascalCase(
  subComponent
)}Variants = VariantProps<typeof ${toCamelCase(subComponent)}Variants>;
export { ${toCamelCase(subComponent)}Variants };
`;

// Gera os arquivos para cada subcomponente
subComponents.forEach((subComponent) => {
  const subComponentDir = path.join(componentPath, toPascalCase(subComponent));

  // Cria o diretório do subcomponente
  if (!fs.existsSync(subComponentDir)) {
    fs.mkdirSync(subComponentDir, { recursive: true });
  }

  // Gera o arquivo do subcomponente
  const subComponentFile = path.join(
    subComponentDir,
    `${toPascalCase(subComponent)}.tsx`
  );
  fs.writeFileSync(
    subComponentFile,
    subcomponentTemplate(subComponent),
    "utf8"
  );
  console.log(`✅ Criado: ${subComponentFile}`);

  // Gera o arquivo de estilos do subcomponente
  const subComponentStylesFile = path.join(
    subComponentDir,
    `${toPascalCase(subComponent)}.styles.ts`
  );
  fs.writeFileSync(
    subComponentStylesFile,
    subcomponentStylesTemplate(subComponent),
    "utf8"
  );
  console.log(`✅ Criado: ${subComponentStylesFile}`);
});

console.log(
  `\n✅ ${subComponents.length} subcomponente(s) gerado(s) com sucesso!`
);
