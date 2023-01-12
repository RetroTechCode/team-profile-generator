const Manager = require('../lib/Manager.js');

describe('Manager', () => {
    describe('Initilization', () => {
        it('should create a new object with the Manager name, id, email address, and office number', () => {
            const manager = new Manager('Dan', 1, 'test@test.com', '4');

            expect(manager.name).toEqual('Dan');
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual('test@test.com');
            expect(manager.officeNum).toEqual('4');
        })
    });

    describe('getOfficeNum', () => {
        it('should return the name of the office number of the Manager', () => {
            const manager = new Manager('Dan', 1, 'test@test.com', '4');

            expect(manager.getOfficeNum()).toEqual('4');
        })
    });

    describe('getRole', () => {
        it('should return the role "Manager"', () => {
            const manager = new Manager('Dan', 1, 'test@test.com', '4');
            
            expect(manager.getRole()).toEqual('Manager');
        })
    });
});