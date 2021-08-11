// Setting up the Employee parent class to be extended by the specific employee roles.
class Employee {
    constructor(name, id, email) {
        this,name = name;
        this.id = id;
        this.email = email;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return "Employee";
    }
}

module.exports = Employee;

/* Employee Object Requirements 
Employee Types: 
* Manager
* Engineer
* Intern

Manager/Employee Information:
Name, ID, Email, Office Number

Functions:

getName()
getID()
getEmail()
getRole()
*/