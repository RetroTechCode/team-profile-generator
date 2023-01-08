const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');

function buildTeam () {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which role would you like to add?',
            choices: ['Intern', 'Engineer', 'Manager', 'None - all employees accounted for.'],
            name: 'employeeType'
        }
    ])
    .then((data) => {
    if (data.employeeType === 'Intern') {
        addIntern(data);
    } else if (data.employeeType === 'Engineer') {
        addEngineer(data);
    } else if (data.employeeType === 'Manager') {
        addManager(data);
    } else {
        console.log('COMPLETE');
    }}
)};

function addIntern(data) {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the intern's name?`,
            name: 'name'
        },
        {
            type: 'input',
            message: `What is the intern's employee ID?`,
            name: 'id'
        },
        {
            type: 'input',
            message: `What is the intern's email address?`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What school does the intern attend?`,
            name: 'school'
        }
    ])
    .then((response) => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        console.log(intern);
    })
};

function addEngineer(data) {
    console.log(data);
};

function addManager(data) {
    console.log(data);
};

buildTeam();