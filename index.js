// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
const generatorMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name:'projecttitle',
    message: 'What did you name your project as?',
    },

    {
    type: 'input',
    name: 'description',
    message: 'Describe what is your project about',
    },

    {
    type: 'list',
    name: 'status',
    message: 'Is this an open source project?',
    choices: ['Yes', 'No', 'Undecided'],
    },

    {
    type: 'input',
    name: 'install',
    message: 'What is required in order to run the project? What are the instructions?',
    },
    {
    type: 'input',
    name: 'tutorial',
    message: 'How to generate the file?',
    },

    {
    type: 'input',
    name: 'github',
    message: 'What is your Github ID?',
    },

    {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err){
        if (err) {
            return console.log(err);
        }
        console.log('The README.md file has been created')
    });
}



// TODO: Create a function to initialize app
async function init() {
    try {
        console.log('README Generator starting...');
        const answers = await inquirer.prompt(questions); // Await the prompt to get user answers
        let fileReadMe = generatorMarkdown(answers); // Generate the README content
        writeToFile('README.md', fileReadMe); // Write the content to a file
    } catch (error) {
        console.error('Error during initialization:', error);
    }
}
// Function call to initialize app
init();
