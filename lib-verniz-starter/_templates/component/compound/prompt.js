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
      return { name, subComponents };
    });
  },
};

