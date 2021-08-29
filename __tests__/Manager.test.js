const Manager = require("../lib/Manager");

test("Set office number using constructor function", () => {
	const officeNumber = "1313";
	const employee = new Manager("Ven", 1, "venvex@gmail.com", officeNumber);
	expect(employee.officeNumber).toBe(officeNumber);
});

test("getRole() will return Manager as a role", () => {
	const role = "Manager";
	const employee = new Manager("Ven", 1, "venvex@gmail.com", "ven-kim");
	expect(employee.getRole()).toBe(role);
});