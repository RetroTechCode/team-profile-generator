const Employee = require('/Employee.js');

class Engineer extends Employee {
    constructor (name, id, email, username) {
        super(name, id, email);
        this.username = username;
    }
}

module.exports = Engineer;