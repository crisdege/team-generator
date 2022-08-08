const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

test("creates a manager object", () => {
  const manager = new Manager("Jared", 1, "me@me.com", 2);

  expect(manager.name).toBe("Jared");
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.email).toEqual(expect.any(String));
  expect(manager.officeNumber).toEqual(expect.any(Number));
});
