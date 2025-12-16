module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name? (e.g., button, input, card)',
        validate: (input) => {
          if (!input || input.trim() === '') {
            return 'Component name is required';
          }
          if (!/^[a-z]+(-[a-z]+)*$/.test(input)) {
            return 'Component name must be kebab-case (e.g., button-group)';
          }
          return true;
        },
      },
    ];

    return inquirer.prompt(questions).then((answers) => {
      const { name } = answers;
      return { name };
    });
  },
};

