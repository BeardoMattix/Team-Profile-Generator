const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const generateHTML = require("./src/generateHTML")
const {
    employeeQuestions,
    managerQuestions,
    engineerQuestions,
    internQuestions,
    addNewMember,
} = require("./src/questions");