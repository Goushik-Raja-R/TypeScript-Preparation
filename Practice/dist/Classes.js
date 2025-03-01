"use strict";
//EXCERSISE 1
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(name, rollno, department) {
        this.Name = name;
        this.Rollno = rollno;
        this.Department = department;
    }
    GetStudentDetails() {
        return `${this.Name} has a ${this.Rollno} as rollno and he is from ${this.Department} Department`;
    }
}
const student1 = new Student("goushik", 10, "CT");
const student2 = new Student("Akshay", 11, "CS");
console.log(student1.GetStudentDetails());
//EXCERSISE 2
class bank {
    constructor(accountnumber, balance) {
        this.accountnumber = accountnumber;
        this.balance = balance;
        this.accountnumber = accountnumber;
        this.balance = balance;
    }
    deposit(Amt) {
        this.balance = (this.balance + Amt);
    }
    withdraw(Amt) {
        if (Amt <= this.balance) {
            this.balance = this.balance - Amt;
            return `Withdrawed Successfully and remaining balance is ${this.Balance}`;
        }
        else {
            return "Fund is not sufficient";
        }
    }
    get Balance() {
        return this.balance;
    }
}
const Person1 = new bank("211CT017", 20000);
Person1.deposit(25000);
console.log(Person1.withdraw(50000));
console.log(Person1.Balance);
//EXCERSISE 3
class Employee {
    constructor(name, employeeID, salary) {
        this.name = name;
        this.employeeID = employeeID;
        this.salary = salary;
        this.name = name;
        this.employeeID = employeeID;
        this.salary = salary;
    }
    getDetails() {
        return `${this.name} has ${this.employeeID} as EMPID and his salary is ${this.salary}`;
    }
}
class Manager extends Employee {
    constructor(name, employeeID, salary, teamsize) {
        super(name, employeeID, salary);
        this.teamsize = teamsize;
    }
    manageTeam() {
        return `I have managing ${this.teamsize} members`;
    }
}
class Developer extends Employee {
    constructor(name, employeeID, salary, programmingLanguage) {
        super(name, employeeID, salary);
        this.programmingLanguage = programmingLanguage;
    }
    code() {
        return `I used to code in ${this.programmingLanguage} Language`;
    }
}
const Manager1 = new Manager("barath", 12, 250000, 5);
const Dev1 = new Developer("Sreeraj", 13, 300000, "Mulesoft");
console.log(Manager1.getDetails());
console.log(Dev1.getDetails());
console.log(Manager1.manageTeam());
console.log(Dev1.code());
