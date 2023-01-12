const Intern = require('../lib/Intern.js');

describe('Intern', () => {
    describe('Initilization', () => {
        it('should create a new object with the Intern name, id, email address, and school', () => {
            const intern = new Intern('Dan', 1, 'test@test.com', 'OSU');

            expect(intern.name).toEqual('Dan');
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual('test@test.com');
            expect(intern.school).toEqual('OSU');
        })
    });

    describe('getSchool', () => {
        it('should return the name of the school the Intern attends', () => {
            const intern = new Intern('Dan', 1, 'test@test.com', 'OSU');

            expect(intern.getSchool()).toEqual('OSU');
        })
    });

    describe('getRole', () => {
        it('should return the role "Intern"', () => {
            const intern = new Intern('Dan', 1, 'test@test.com', 'OSU');
            
            expect(intern.getRole()).toEqual('Intern');
        })
    });
});