const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Jared", 1, "me@me.com", "school");

  expect(intern.name).toBe("Jared");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});
