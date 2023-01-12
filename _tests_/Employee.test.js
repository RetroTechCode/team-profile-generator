const Employee = require('../lib/Employee.js');

describe('Employee', () => {
    describe('Initilization', () => {
        it('should create a new object with the employee name, id, and email address', () => {
            const employee = new Employee('Dan', 1, 'test@test.com');

            expect(employee.name).toEqual('Dan');
            expect(employee.id).toEqual(1);
            expect(employee.email).toEqual('test@test.com');
        })
    });

    describe('getName', () => {
        it('should return the name of the Employee', () => {
            const employee = new Employee('Dan', 5, 'test@test.com');

            expect(employee.getName()).toEqual('Dan');
        })
    });

    describe('getId', () => {
        it('should return the ID of the Employee', () => {
            const employee = new Employee('Dan', 5, 'test@test.com');

            expect(employee.getId()).toEqual(5);
        })
    });

    describe('getEmail', () => {
        it('should return the email address of the Employee', () => {
            const employee = new Employee('Dan', 5, 'test@test.com');

            expect(employee.getEmail()).toEqual('test@test.com');
        })
    });

    describe('getRole', () => {
        it('should return the role of the Employee', () => {
            const employee = new Employee('Dan', 5, 'test@test.com');

            expect(employee.getRole()).toEqual('Employee');
        })
    });
});