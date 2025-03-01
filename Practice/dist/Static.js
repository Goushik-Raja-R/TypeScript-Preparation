"use strict";
class cake {
    static GetInfoBakery() {
        return `The bakery details are ${this.BakeryName}`;
    }
}
cake.BakeryName = "Akshay bakery"; // static member bakeryname can't be accessed by object of class
//Object cannot be created for static classes
console.log(cake.BakeryName);
console.log(cake.GetInfoBakery());
// EXCERSISE 1
class Employee {
    constructor(Empname, Designation) {
        this.Empname = Empname;
        this.Designation = Designation;
        this.Designation = Designation;
        this.Empname = Empname;
    }
    GetEmployeeDetails() {
        return `Employee Details name ${this.Empname} and the Designation is ${this.Designation}`;
    }
    static GetEmpID() {
        return this.EmpID;
    }
}
Employee.EmpID = 12;
const Employee1 = new Employee("ramesh", "CA");
console.log(Employee1.GetEmployeeDetails());
console.log(Employee.GetEmpID());
