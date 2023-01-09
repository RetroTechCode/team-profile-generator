const Employee = require("../lib/employee");

function generateCards(team) {
    console.log(team);
    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === 'Intern') {
            createInternCard(team[i]);
        }
    }
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

module.exports = generateCards;
