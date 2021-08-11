const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
// const generateHTML = require("./src/generateHTML")
const {
    employeeQuestions,
    managerQuestions,
    engineerQuestions,
    internQuestions,
    addNewMember,
} = require("./src/questions");

const managerArray = [];
const engineerArray = [];
const internArray = [];


const createTeam = async () => {
    let employee = await inquirer.prompt(employeeQuestions);
    try {
        switch (employee.role) {
            case "Manager":
                let officeObj = await inquirer.prompt(managerQuestions);
                const manager = new Manager(
                    employee.name,
                    employee.id,
                    employee.email,
                    employee.officeNumber
                    );
                    managerArray.push(manager);
                    break;

            case "Engineer":
                let gitHubObj = await inquirer.prompt(engineerQuestions);
                const engineer = new Engineer (
                    employee.name,
                    employee.id,
                    employee.email,
                    employee.github,
                );
                engineerArray.push(engineer);
                break;

            case "Intern":
                let schoolObj = await inquirer.prompt(internQuestions);
                const intern = new Intern(
                    employee.name,
                    employee.id,
                    employee.email,
                    employee.school,
                );
                internArray.push(intern);
                break;
                default: "";
        } 
    }
    catch (error){
        console.log(error);
    }
};