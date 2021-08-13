// Importing the Employee class for testing

const Employee = require('../lib/employee');

describe("Employee", () => {
    describe("initialization", () => {
        it("should do a check to see if the initialized object is a new Employee class", () => {
            const newEmp = new Employee();
            expect(newEmp instanceof Employee).toEqual(true);
        })
    })
})