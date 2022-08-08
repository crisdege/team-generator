// name
// id
// email
// getName()
// getId()
// getEmail()
// getRole() -- returns 'Employee'

class Employee {
  constructor(name = "", id, email = "") {
    this.name = name;
    this.id = Math.floor();
    this.email = email;
  }

  getName() {
    return `${this.name}`;
  }

  getId() {
    return `${this.id}`;
  }

  getRole() {
    return "Employee";
  }
}
module.exports = Employee;
