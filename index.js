// TODO: Include packages needed for this application
const inquirer = require("inquirer"); // npm package requirer includes modules in the code
const fs = require("fs"); //file system
const generateMarkdown = require("./generateMarkdown.js");
console.log("welcome to my Readme generator");
console.log(
  "Answer the following questions to generate a high quality README for your project "
);

// TODO: Create an array of questions for user input
const questions = [
  // Name of the Project

  {
    type: "input",
    name: "title",
    message: "Enter the title of your project:",

    validate: (your_Input) => {
      if (your_Input) {
        return true;
      } else {
        console.log("Enter a title to continue!");
        return false;
      }
    },
  },

  // Project Description

  {
    type: "input",
    name: "Description",
    message: "Describe your project:",

    validate: (your_description) => {
      if (your_description) {
        return true;
      } else {
        console.log("Enter a title to continue!");
        return false;
      }
    },
  },

  // Available license

  {
    type: "input",
    name: "license",
    message: "What type of License do you have ?:",
    availableLicences: ["MPL 2.0", "GNU", "Apache", "MIT", "None of the above"],

    validate: (your_license) => {
      if (your_license) {
        return true;
      } else {
        console.log("Enter a title to continue!");
        return false;
      }
    },
  },
  // Contributors for the code
  {
    type: "input",
    name: "Contribution",
    message: "How can users contribute to this code ?:",

    validate: (your_Contribution) => {
      if (your_Contribution) {
        return true;
      } else {
        console.log("Enter a title to continue!");
        return false;
      }
    },
  },

  // Instalation Instructions for the project
  {
    type: "input",
    name: "Instalation",
    message: "How do you install the project ? :",

    validate: (your_Instalation) => {
      if (your_Instalation) {
        return true;
      } else {
        console.log("Enter a title to continue!");
        return false;
      }
    },
  },

  //Usage information

  {
    type: "input",
    name: "usage",
    message: "How do you use this project ? :",

    validate: (your_usage) => {
      if (your_usage) {
        return true;
      } else {
        console.log("Enter a title to continue!");
        return false;
      }
    },
  },

  // Github Username
  {
    type: "input",
    name: "github",
    message: "What is your github username ?:",

    validate: (github_Input) => {
      if (github_Input) {
        return true;
      } else {
        console.log("Enter a title to continue!");
        return false;
      }
    },
  },

  //Table_of_Contents

  {
    type: "input",
    name: "Table_of_Contents",
    message: "How does the user test this code ?:",

    validate: (your_Table_of_Contents) => {
      if (your_Table_of_Contents) {
        return true;
      } else {
        console.log("Enter a title to continue!");
        return false;
      }
    },
  },

  // Email Address
  {
    type: "input",
    name: "Email",
    message: "Enter your email address for questions :",

    validate: (email_input) => {
      if (email_input) {
        return true;
      } else {
        console.log("Enter a title to continue!");
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success! You can now preview your README file");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (userInput) {
    console.log(userInput);
    writeToFile("README.md", generateMarkdown(userInput));
  });
}

// Function call to initialize app
init();
