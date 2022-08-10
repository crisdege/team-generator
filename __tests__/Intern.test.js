const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("creates an intern object", () => {
  const intern = new Intern("Jared", "12345", "me@me.com", "school");

  expect(intern.name).toBe("Jared");
  expect(intern.id).toEqual(expect.any(String));
  expect(intern.email).toEqual(expect.any(String));
  expect(intern.school).toEqual(expect.any(String));
});

test("get intern school", () => {
  const testSchool = "school";
  const intern = new Intern(testSchool);

  expect(intern.getSchool()).toBe(testSchool);
});

test("get intern role", () => {
  const testRole = "Intern";
  const intern = new Intern(testRole);

  expect(intern.getRole()).toBe(testRole);
});
