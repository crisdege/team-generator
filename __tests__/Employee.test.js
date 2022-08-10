const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Dave", "12345", "me@me.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
});

test("gets employee's name", () => {
  const testName = "Dave";
  const employee = new Employee(testName);

  expect(employee.getName()).toBe(testName);
});

test("gets employee's id", () => {
  const testId = "12345";
  const employee = new Employee(testId);

  expect(employee.getId()).toBe(testId);
});

test("gets employee's email", () => {
  const testEmail = "me@me.com";
  const employee = new Employee(testEmail);

  expect(employee.getEmail()).toBe(testEmail);
});

test("gets employee's role", () => {
  const testRole = "Employee";
  const employee = new Employee(testRole);

  expect(employee.getRole()).toBe(testRole);
});
