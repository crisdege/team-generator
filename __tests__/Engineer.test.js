const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("Jared", 1, "me@me.com", "jared");

  expect(engineer.name).toBe("Jared");
  expect(engineer.id).toEqual(expect.any(Number));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});
