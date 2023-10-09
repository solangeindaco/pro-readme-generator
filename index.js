// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const licenses = generateMarkdown.licensesChoices;
const { writeFile } = fs.promises;

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Give a description of your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the steps required to install your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions for use.',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How a developer can contribute to the project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Please provide test instructions:',
    },
    {
      type: 'rawlist',
      name: 'license',
      message: 'Which license do you use?',
      choices: licenses,
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'What is your GitHub username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
  ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  writeFile(fileName, generateMarkdown.generateMarkdown(data));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => writeToFile('./user_readme/README.md', answers))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
