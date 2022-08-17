const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./utils/generate-site");

// 'THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
const promptManager = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "manager-name",
      message: "Please enter the manager's name",
    },
    {
      type: "input",
      name: "employeeID",
      message: "What is the employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email address?",
    },
    {
      type: "input",
      name: "office-number",
      message: "What is the employee's office number?",
    },
  ]);
};
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
const promptTeam = (teamData) => {
  //if there's no 'team' array property, create one
  if (!teamData.employees) {
    teamData.employees = [];
  }
  return inquirer
    .prompt([
      {
        type: "checkbox",
        name: "employee-type",
        message: "Would you like to add an engineer or an intern?",
        choices: [("Engineer", "Intern", "I'm done adding team members")],
        validate: (choiceInput) => {
          if (choiceInput === "Engineer") {
            return promptEngineer();
          } else if (choiceInput === "Intern") {
            return promptIntern();
          } else {
            inquirer.prompt({
              type: "confirm",
              name: "confirmAddEmployee",
              default: false,
            });
            console.log("HTML generated");
          }
        },
      },
    ])
    .then((emplyeeData) => {
      teamData.employees.push(emplyeeData);
      if (teamData.confirmAddEmployee) {
        return promptTeam(teamData);
      } else {
        return teamData;
      }
    });
};
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
const promptEngineer = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "engineer-name",
      message: "Please enter the engineer's name",
    },
    {
      type: "input",
      name: "employeeID",
      message: "What is the employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email address?",
    },
    {
      type: "input",
      name: "github",
      message: "What is the employee's GitHub username?",
    },
  ]);
};
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
const promptIntern = () => {
  return inquirer.prompt([
    {
      type: "input",
      name: "intern-name",
      message: "Please enter the intern's name",
    },
    {
      type: "input",
      name: "employeeID",
      message: "What is the employee ID?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email address?",
    },
    {
      type: "input",
      name: "school",
      message: "What is the intern's School?",
    },
  ]);
};

// promptManager()
//   .then(promptTeam)
//   .then((teamData) => {
//     return generatePage(teamData);
//   })
//   .then((pageHTML) => {
//     return writeFile(pageHTML);
//   })
//   .then((writeFileResponse) => {
//     console.log(writeFileResponse);
//     return copyFile();
//   })
//   .then((copyFileResponse) => {
//     console.log(copyFileResponse);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

module.exports = Questions;
