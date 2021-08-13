const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);
const createHTML = require("./src/createHTML");
const {
  employeeQuestions,
  managerQuestions,
  engineerQuestions,
  internQuestions,
  addNewMemberQuestion,
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
          officeObj.officeNumber
        );
        managerArray.push(manager);
        break;

      case "Engineer":
        let gitHubObj = await inquirer.prompt(engineerQuestions);
        const engineer = new Engineer(
          employee.name,
          employee.id,
          employee.email,
          gitHubObj.github
        );
        engineerArray.push(engineer);
        break;

      case "Intern":
        let schoolObj = await inquirer.prompt(internQuestions);
        const intern = new Intern(
          employee.name,
          employee.id,
          employee.email,
          schoolObj.school
        );
        internArray.push(intern);
        break;
      default:
        "";
    }
  } catch (error) {
    console.log(error);
  }
};

const addNewMembers = async () => {
  let addMember = "Yes";
  let addMoreMembersObj;
  while (addMember === "Yes") {
    addMoreMembersObj = await inquirer.prompt(addNewMemberQuestion);
    addMember = await addMoreMembersObj.addAnotherMember;
    if (addMember === "Yes") {
      await createTeam();
    }
  }
};

const init = async () => {
  try {
    await createTeam();
    await addNewMembers();
    await writeFileAsync(
      "./dist/index.html",
      createHTML(managerArray, engineerArray, internArray)
    );
    console.log("Your team has been updated in index.html");
  } catch (err) {
    console.log(err);
  }
};

init();
