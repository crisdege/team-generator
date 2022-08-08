//extend Employee
//will also have:
//github--GitHub username
//getGithub()
//getRole -- overridden to return 'Engineer'
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name = "", id, email = "", github = "") {
    super(name);
    this.id = id;
    this.email = email;
    this.github = github;
  }
}

module.exports = Engineer;
