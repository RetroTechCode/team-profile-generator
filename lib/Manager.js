const Employee = require('/Employee.js');

class Manager extends Employee {
    constructor (name, id, email, officeNum) {
        super(name, id, email);
        this.officeNum = officeNum;
    }
}

module.exports = Manager;