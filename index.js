const inquirer = require('inquirer');
const generatePage = require('#');
const { writeFile, copyFile } = require('#');

const promptUser = () => {
	return inquirer.prompt([
		{
			type: 'input',
			name: 'name',
			message: "What is your team manager's name?",
				validate: nameInput => {
					if (nameInput) {
						return true;
					} else {
						console.log('Please enter a name!');
						return false;
					}
				}
		},
		{
			type: 'input',
			name: 'id',
			message: "Enter the team manager's employee ID: ",
				validate: nameInput => {
					if (nameInput) {
						return true;
					} else {
						console.log('Please enter an ID!');
						return false;
					}
				}
		},
		{
			type: 'input',
			name: 'email',
			message: "Enter the team manager's email: ",
				validate: nameInput => {
					if (nameInput) {
						return true;
					} else {
						console.log('Please enter an email!');
						return false;
					}
				}
		},
		{
			type: 'input',
			name: 'office',
			message: "Enter the team manager's office number: ",
				validate: nameInput => {
					if (nameInput) {
						return true;
					} else {
						console.log('Please enter the office number!');
						return false;
					}
				}
		},

	])
}