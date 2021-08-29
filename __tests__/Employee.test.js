const Employee = require("../lib/Employee");

test("Set name using constructor function", () => {
	const name = "Ven Kim";
	const employee = new Employee(name);
	expect(employee.name).toBe(name);
});

test("Set the user ID using constructor function", () => {
	const id = "1";
	const employee = new Employee("Ven Kim", id, "venvex@gmail.com");
	expect(employee.id).toBe(id);
});

test("Running getEmail() will return the supplied email", () => {
	const email = "venvex@gmail.com";
	const employee = new Employee("Ven Kim", 1, email);
	expect(employee.getEmail()).toBe(email);
});

test("Running getRole() will return 'Employee'", () => {
	const role = "Employee";
	const employee = new Employee("Ven Kim", 1, "venvex@gmail.com");
	expect(employee.getRole()).toBe(role);
});