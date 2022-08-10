const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const engineer = new Engineer("Jared", "12345", "me@me.com", "jared");

  expect(engineer.name).toBe("Jared");
  expect(engineer.id).toEqual(expect.any(String));
  expect(engineer.email).toEqual(expect.any(String));
  expect(engineer.github).toEqual(expect.any(String));
});

test("gets engineer's git hub user id", () => {
  const testGithub = "jared";
  const engineer = new Engineer(testGithub);

  expect(engineer.getGithub()).toBe(testGithub);
});
test("gets engineer's role", () => {
  const testRole = "Engineer";
  const engineer = new Engineer(testRole);

  expect(engineer.getRole()).toBe(testRole);
});
