const Engineer = require('../lib/Engineer.js');

describe('Engineer', () => {
    describe('Initilization', () => {
        it('should create a new object with the engineer name, id, email address, and Github', () => {
            const engineer = new Engineer('Dan', 1, 'test@test.com', 'RetroTechCode');

            expect(engineer.name).toEqual('Dan');
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual('test@test.com');
            expect(engineer.github).toEqual('RetroTechCode');
        })
    });

    describe('getGithub', () => {
        it('should return the Github username of the Engineer', () => {
            const engineer = new Engineer('Dan', 1, 'test@test.com', 'RetroTechCode');

            expect(engineer.getGithub()).toEqual('RetroTechCode');
        })
    });

    describe('getRole', () => {
        it('should return the role "Engineer"', () => {
            const engineer = new Engineer('Dan', 1, 'test@test.com', 'RetroTechCode');
            
            expect(engineer.getRole()).toEqual('Engineer');
        })
    });
});