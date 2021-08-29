const Engineer = require("../lib/Engineer");

test("Set GitHub username using constructor function", () => {
	const github = "ven-kim";
	const employee = new Engineer("Ven", 1, "venvex@gmail.com", github);
	expect(employee.github).toBe(github);
});

test("getRole() will return Engineer as a role", () => {
	const role = "Engineer";
	const employee = new Engineer("Ven", 1, "venvex@gmail.com", "ven-kim");
	expect(employee.getRole()).toBe(role);
});