const Employee = require('../lib/Employee.js');
const Engineer = require('../lib/Engineer.js');

const cards = [];

function generateCards(team) {
    console.log(team);
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === 'Intern') {
            let card = createInternCard(team[i]);
            cards.push(card);
        } else if (team[i].getRole() === 'Engineer') {
            let card = createEngineerCard(team[i]);
            cards.push(card);
        } else {
            let card = createManagerCard(team[i]);
            cards.push(card);
        }
    } 

    renderPage(cards);
}

function createInternCard(employee) {
    console.log(employee.getRole());
    return `<div class="card" style="width: 18rem; border-radius: 0; box-shadow: 4px 4px 4px rgb(185, 185, 185);">
    <section
        style="background-color:rgb(25, 144, 255); color: white; padding: 6px 10px 0; margin: 0; height: 70px;">
        <p style="font-weight: bold; margin: 0 0 5px;">${employee.name}</p>
        <p style="margin: 0 0 5px;"><i class="bi bi-cup-hot-fill"></i>${employee.getRole()}</p>
    </section>
    <div class="card-body bg-light" style="padding: 32px 16px;">
        <div class="d-block" style="margin: 0;">
            <p style="height: 50px; background-color: white; border:solid 1px rgb(185, 185, 185); margin: 0; padding: 12px 4px;">
                ID: ${employee.id}</p>
            <p style="height: 50px; background-color: white; border:solid 1px rgb(185, 185, 185); margin: 0; padding: 12px 4px;">
                Email: ${employee.email}</p>
            <p style="height: 50px; background-color: white; border:solid 1px rgb(185, 185, 185); margin: 0; padding: 12px 4px;">
                School: ${employee.school}</p>
        </div>
    </div>
</div>`
}

function createEngineerCard(employee) {
    return `<div class="card" style="width: 18rem; border-radius: 0; box-shadow: 4px 4px 4px rgb(185, 185, 185);">
        <section
            style="background-color:rgb(25, 144, 255); color: white; padding: 6px 10px 0; margin: 0; height: 70px;">
            <p style="font-weight: bold; margin: 0 0 5px;">${employee.name}</p>
            <p style="margin: 0 0 5px;"><i class="bi bi-eyeglasses"></i>${employee.getRole()}</p>
        </section>
        <div class="card-body bg-light" style="padding: 32px 16px;">
            <div class="d-block" style="margin: 0;">
                <p style="height: 50px; background-color: white; border:solid 1px rgb(185, 185, 185); margin: 0; padding: 12px 4px;">
                    ID: ${employee.id}</p>
                <p style="height: 50px; background-color: white; border:solid 1px rgb(185, 185, 185); margin: 0; padding: 12px 4px;">
                    Email: ${employee.email}</p>
                <p style="height: 50px; background-color: white; border:solid 1px rgb(185, 185, 185); margin: 0; padding: 12px 4px;">
                    GitHub: ${employee.getGithub()}</p>
            </div>
        </div>
    </div>`
}

function createManagerCard(employee) {
    return `<div class="card" style="width: 18rem; border-radius: 0; box-shadow: 4px 4px 4px rgb(185, 185, 185);">
        <section
            style="background-color:rgb(25, 144, 255); color: white; padding: 6px 10px 0; margin: 0; height: 70px;">
            <p style="font-weight: bold; margin: 0 0 5px;">${employee.name}</p>
            <p style="margin: 0 0 5px;"><i class="bi bi-mortarboard-fill"></i>${employee.getRole()}</p>
        </section>
        <div class="card-body bg-light" style="padding: 32px 16px;">
            <div class="d-block" style="margin: 0;">
                <p style="height: 50px; background-color: white; border:solid 1px rgb(185, 185, 185); margin: 0; padding: 12px 4px;">
                    ID: ${employee.id}</p>
                <p style="height: 50px; background-color: white; border:solid 1px rgb(185, 185, 185); margin: 0; padding: 12px 4px;">
                    Email: ${employee.email}</p>
                <p style="height: 50px; background-color: white; border:solid 1px rgb(185, 185, 185); margin: 0; padding: 12px 4px;">
                    Office number: ${employee.officeNum}</p>
            </div>
        </div>
    </div>`
}

function renderPage(cards) {
    console.log(cards);
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Generated Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
            integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
        <link rel="stylesheet" href="./style.css">
    </head>
    
    <body>
        <div class="text-white text-center" style="height: 6rem; background-color:rgb(254, 75, 75)">
            <h1 class="text-center" style="padding-top: 1.5rem;">Generated Team Profile</h1>
        </div>
        <main class="d-flex" style="justify-content: center; flex-wrap: wrap; margin: 40px auto; gap: 10px; width: 60%">
        ${cards.join('')}
        </main>
    </body>
    
    </html>
    `
}

module.exports = generateCards;
