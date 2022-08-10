// extend employee
//it will also have:
//officeNumber
//getRole()--overridden to return 'Manager'
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name = "", id, email = "", officeNumber = "") {
    super(name);
    this.id = id;
    this.email = email;
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
