const employeeQuestions = [
  {
    type: "input",
    message: "Please enter the team member's name:",
    name: "name",
  },
  {
    type: "list",
    message: "Please enter the team member's role:",
    choices: ["Manager", "Engineer", "Intern"]
  },
  {
    type: "input",
    message: "Please enter the team member's ID:",
    name: "ID",
  },
  {
    type: "input",
    message: "Please enter the team member's email:",
    name: "email",
  },
];

const managerQuestions = [
    {
      type: "input",
      message: "Please enter the manager's office number:",
      name: "office number",
    },
  ];

  const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's GitHub user name?",
        name: "github"
      },
  ]
  const internQuestions = [
    {
        type: "input",
        message: "Where does this intern attend school?",
        name: "school"
      },
  ]

  const addNewMember = [
    {
      type: "list",
      message: "Would you like to add a new team member?",
      choices: ["Yes", "No"],
      name: "add member",
    },
  ];

  module.exports = {
      employeeQuestions,
      managerQuestions,
      engineerQuestions,
      internQuestions,
      addNewMember,
  };