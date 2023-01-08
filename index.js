const inquirer = require('inquirer');
const fs = require('fs');

function buildTeam () {
    inquirer.prompt([
        {
            type: 'list',
            message: 'Which role would you like to add?',
            choices: ['Intern', 'Engineer', 'Manager', 'None - all employees accounted for.'],
            name: 'addEmployee'
        }
    ])
    .then((data) => {
    if (data.addEmployee === 'Intern') {
        console.log('INTERN');
    } else if (data.addEmployee === 'Engineer') {
        console.log('ENGINEER');
    } else if (data.addEmployee === 'Manager') {
        console.log('MANAGER');
    } else {
        console.log('COMPLETE');
    }}
)};

buildTeam();