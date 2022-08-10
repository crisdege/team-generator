const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("creates a manager object", () => {
  const manager = new Manager("Jared", "12345", "me@me.com", "2");

  expect(manager.name).toBe("Jared");
  expect(manager.id).toEqual(expect.any(String));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(String));
});

test("get manager role", () => {
  const testRole = "Manager";
  const manager = new Manager(testRole);

  expect(manager.getRole()).toBe(testRole);
});
