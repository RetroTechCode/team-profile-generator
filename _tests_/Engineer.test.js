const Engineer = require('../lib/Engineer.js');

describe('Engineer', () => {
    describe('Initilization', () => {
        it('should create a new object with the engineer name, id, email address, and Github', () => {
            const engineer = new Engineer('Dan', 1, 'test@test.com', 'RetroTechCode');

            expect(engineer.name).toEqual('Dan');
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual('test@test.com');
            expect(engineer.getGithub()).toEqual('RetroTechCode');
        })
    });
});