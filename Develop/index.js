const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const path = require("path");

// array of questions for user
const questions = [
    // Title
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of the project? (Required)',
    },

    //Description
    {
        type: 'input',
        name: 'description',
        message: 'Provide a breif description of the project. (Required)',
    },

    //Installation information
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation requierements and guide for this project? (Required)',
    },

    //Usage Instructions
    {
        type: 'input',
        name: 'usage',
        message: 'Provide brief directions for use and include gifs and/or screenshots as needed. (Required)',
    },

    {
        type: 'input',
        name: 'video',
        message: 'add your video url',
    },

    // License and Badge
    {
        type: 'list',
        name: 'license',
        message: 'Select a license for this project. (Required)',
        choices: ['MIT', 'ISC', 'Zlib', 'None']
    },

    //contribution
    {
        type: 'input',
        name: 'contribution',
        message: 'Who is the contributor of this project?(Required)',
    },

    //linkedin

    {
        type: 'input',
        name: 'linkedin',
        message: 'What is Linkedin profile.(Optional)',
    },

    //Deployed
    {
        type: 'input',
        name: 'url',
        message: 'What is your deployed URL?',
    },

    // GithubUrl
    {
        type: 'input',
        name: 'gitURL',
        message: 'What is your is Github URL?',
    },

    //Email
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    //pass questions through
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log("README.md Successfull Generated!!");
            writeToFile("README.md", generateMarkdown({ ...answers }));
        })
}
// function call to initialize program
init();
