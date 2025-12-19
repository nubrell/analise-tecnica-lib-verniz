const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the main component name? (e.g., nav, table, sidebar)',
        validate: (input) => {
          if (!input || input.trim() === '') {
            return 'Component name is required';
          }
          if (!/^[a-z]+(-[a-z]+)*$/.test(input)) {
            return 'Component name must be kebab-case (e.g., nav-group)';
          }
          return true;
        },
      },
      {
        type: 'input',
        name: 'subComponents',
        message: 'List sub-components separated by commas (e.g., NavGroup, NavItem, NavHeader)',
        validate: (input) => {
          if (!input || input.trim() === '') {
            return 'At least one sub-component is required';
          }
          return true;
        },
        filter: (input) => {
          return input.split(',').map((s) => s.trim()).filter(Boolean);
        },
      },
    ];

    return inquirer.prompt(questions).then((answers) => {
      const { name, subComponents } = answers;
      // Garante que subComponents seja sempre um array
      const subComponentsArray = Array.isArray(subComponents) 
        ? subComponents 
        : (typeof subComponents === 'string' 
            ? subComponents.split(',').map((s) => s.trim()).filter(Boolean)
            : []);
      
      const result = { 
        name, 
        subComponents: subComponentsArray
      };

      // Salva os dados em um arquivo temporário para gerar subcomponentes depois
      const tempFile = path.join(process.cwd(), '.hygen-temp.json');
      fs.writeFileSync(tempFile, JSON.stringify({ name, subComponents: subComponentsArray }), 'utf8');

      // Gera os arquivos dos subcomponentes
      try {
        const scriptPath = path.join(process.cwd(), 'scripts', 'generate-subcomponents.js');
        const subComponentsJson = JSON.stringify(subComponentsArray);
        execSync(`node "${scriptPath}" "${name}" '${subComponentsJson}'`, { 
          stdio: 'inherit',
          cwd: process.cwd() 
        });
      } catch (error) {
        console.error('⚠️  Erro ao gerar subcomponentes:', error.message);
        console.log('   Você pode gerar manualmente depois com:');
        console.log(`   node scripts/generate-subcomponents.js ${name} '${JSON.stringify(subComponentsArray)}'`);
      } finally {
        // Remove o arquivo temporário
        if (fs.existsSync(tempFile)) {
          fs.unlinkSync(tempFile);
        }
      }

      return result;
    });
  },
};
