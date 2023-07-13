// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs"); //file system

// TODO: Create an array of questions for user input

/*
from reading acceptance criteria:
things to ask:
- What is the title of your app?
- Short description of app
- Is there a license for this? (this is a badge)
- How do you install?
- What is this app used for?
- How do I contribute to the application?
- Are there any test cases?
- How do I contact you for questions? (email, and github)
*/
const questions = [
    {
        type: "input",
        message: "What is the title of your app?",
        name: "projectTitle"
    },
    {
        message: "What is a short description of your project?",
        name: "shortDescription"
    },
    {
        type: "list",
        message: "Is there a license for this?",
        name: "appLicense",
        choices: ['ISC', 'MIT', 'Mozilla','No license'],
    },  
    {
        message: "How do you install this app?",
        name: "appInstallation"
    },   
    {
        message: "What is this app used for?",
        name: "appUsage"
    },   
    {
        message: "How did you contribute to this app?",
        name: "appContribution"
    },   
    {
        message: "What are the test intructions for this app?",
        name: "appInstructions"
    },   
    {
        message: "Questions about the app?",
        name: "appQuestions"
    },   






];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("created file")
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers)
        const template= `

    ## ${answers.projectTitle}

    ## Description

    A brief explanation of my project is ${answers.shortDescription}. 
    
    ## Installation
    
    The app is installed by ${answers.appInstallation}.

    ## Usage

    The app is used ${answers.appUsage}. 

    ## License

    The app has the following license ${answers.appLicense}.

    ## Contribution

    I contributed to the app by ${answers.appContribution}.

    ## Tests

    These are the test instructions ${answers.appInstructions}.
`

        writeToFile("sampleReadme.md", template)
    })

}

// Function call to initialize app
init();
