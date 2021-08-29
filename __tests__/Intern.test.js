const Intern = require("../lib/Intern");

test("Set school using constructor function", () => {
	const school = "UCF";
	const employee = new Intern("Ven", 1, "venvex@gmail.com", school);
	expect(employee.school).toBe(school);
});

test("getRole() will return Intern as a role", () => {
	const role = "Intern";
	const employee = new Intern("Ven", 1, "venvex@gmail.com", "ven-kim");
	expect(employee.getRole()).toBe(role);
});