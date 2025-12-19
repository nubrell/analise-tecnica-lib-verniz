#!/usr/bin/env node

/**
 * Script wrapper para criar componentes usando Hygen
 * Pergunta o tipo de componente (web ou compound) antes de executar
 * Para compound, o prompt.js já gera os subcomponentes automaticamente
 */

const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askQuestion(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function main() {
  try {
    console.log('🚀 Gerador de Componentes\n');

    // Pergunta o tipo de componente
    const componentType = await askQuestion(
      'Qual o tipo de componente? (web/compound) [web]: '
    );

    const type = componentType.toLowerCase() || 'web';

    if (type !== 'web' && type !== 'compound') {
      console.error('❌ Tipo inválido. Use "web" ou "compound"');
      process.exit(1);
    }

    // Fecha a interface readline antes de executar o hygen
    rl.close();

    // Executa o hygen com o tipo selecionado
    // Para compound, o prompt.js já gera os subcomponentes automaticamente
    console.log(`\n📦 Criando componente ${type}...\n`);
    
    const command = `npx hygen component ${type}`;
    execSync(command, { stdio: 'inherit', cwd: process.cwd() });

    console.log('\n✅ Componente criado com sucesso!');
  } catch (error) {
    console.error('\n❌ Erro ao criar componente:', error.message);
    process.exit(1);
  }
}

main();
