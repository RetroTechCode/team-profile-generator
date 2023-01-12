const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern.js');
const Engineer = require('./lib/Engineer.js');
const Manager = require('./lib/Manager.js');
const generateHtml = require('./src/generateHtml.js');
const team = [];

function buildTeam() {
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
                teamComplete(team);
            }
        }
        )
};

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
            team.push(intern);
            buildTeam();
        })
};

function addEngineer(data) {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the engineer's name?`,
            name: 'name'
        },
        {
            type: 'input',
            message: `What is the engineer's employee ID?`,
            name: 'id'
        },
        {
            type: 'input',
            message: `What is the engineer's email address?`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What is the engineer's GitHub username?`,
            name: 'github'
        }
    ])
        .then((response) => {
            const engineer = new Engineer(response.name, response.id, response.email, response.github);
            team.push(engineer);
            buildTeam();
        })
};

function addManager(data) {
    inquirer.prompt([
        {
            type: 'input',
            message: `What is the manager's name?`,
            name: 'name'
        },
        {
            type: 'input',
            message: `What is the manager's employee ID?`,
            name: 'id'
        },
        {
            type: 'input',
            message: `What is the manager's email address?`,
            name: 'email'
        },
        {
            type: 'input',
            message: `What is the manager's office number?`,
            name: 'officeNum'
        }
    ])
        .then((response) => {
            const manager = new Manager(response.name, response.id, response.email, response.officeNum);
            team.push(manager);
            buildTeam();
        })
};

function teamComplete(team) {
    const generatedHtml = generateHtml(team);

    fs.writeFile('./dist/index.html', generatedHtml, (err) =>
        err ? console.log(err) : console.log('Successfully generated your Team Profile!'))
}

buildTeam();