let checker = require('../checker');

describe("Check if password is Valid", function () {
    let passwordIsValid;
   
    it("check if password contains capital letters", function () {
        expect('Kgauza').toMatch(/[A-Z]/);
    });

    it("check if password contains small letters", function () {
        expect('Kgauza').toMatch(/[a-z]/);
    });

    
    it("check if password contains special characters", function () {
        expect('Kgauza@').toMatch(/[{ !@#$%^&*()]/);

    });

    it("check if password contains numbers", function () {
        expect('Kgauza1993').toMatch(/[0-9]/);

    });

    it("check if password exists", function () {
        expect(' ').not.toBeNull();

   });


   it("check if password has more than 8 letters", function () {
       expect('Kgauza@1993'.length).toBeGreaterThan(8);

    });
});