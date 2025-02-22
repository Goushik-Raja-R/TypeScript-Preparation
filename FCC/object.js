"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "goushik",
    email: "goushik@mail.com",
    isActive: true
};
//Every time when i call this function it will return --> Emp:"goushik",isPaid:true
function CreateUser() {
    return { Emp: "goushik", isPaid: true };
}
var candidate = CreateUser();
console.log(candidate);
// passing arguements through functions
function CreateEmployee(_a) {
    var Empname = _a.Empname, Age = _a.Age;
    return { Empname: Empname, Age: Age };
}
var ans = CreateEmployee({ Empname: "akshay", Age: 25 });
console.log(ans);
// Defining Object in TS
var User1 = {
    name: "sreeraj",
    email: "sreeraj@gmail.com",
    isCorrect: true
};
console.log(User1.isCorrect);
var store = { name: "barath", email: "barathebk@gmail", id: 10 };
console.log(store);
var answer = {
    name: "bhuvanesh",
    // sayhello:() =>"hello welcome"
    sayhello: function () {
        return "hello welcome";
    }
};
console.log(answer.sayhello());
var emp = {
    name: "akshay",
    empid: 10
};
console.log(emp);
var being1 = {
    name: "barath",
    sayhi: function () {
        return "hi";
    }
};
console.log(being1.sayhi());
