//extend Employee
//will also contain:
//school
//getSchool()
//getRole()-- return 'Intern'
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name);
    this.id = id;
    this.email = email;
    this.school = school;
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
