const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const Questions = require("./utils/Questions");
const { writeFile, copyFile } = require("./utils/generate-site");
const generatePage = require("./src/page-template");

function Team() {
  this.employee = [];
}

Team.prototype.initializeTeam = function () {
  promptManager()
    .then(({ name }) => {
      this.employee = new Manager(name);
    })
    .then(promptTeam)
    .then((teamData) => {
      return generatePage(teamData);
    })
    .then((pageHTML) => {
      return writeFile(pageHTML);
    })
    .then((writeFileResponse) => {
      console.log(writeFileResponse);
      return copyFile();
    })
    .then((copyFileResponse) => {
      console.log(copyFileResponse);
    })
    .catch((err) => {
      console.log(err);
    });
};
