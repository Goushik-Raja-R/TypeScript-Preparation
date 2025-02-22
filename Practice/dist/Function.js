"use strict";
//Functions in TypeScript work similarly to JavaScript but with added type safety
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
console.log(add(10, 16));
//Optional parameters
function greet(name, age) {
    if (age) {
        return `my name is ${name} and my age is ${age}`;
    }
    else {
        return `my name is ${name}`;
    }
}
console.log(greet("goushik", 21));
//default parameters
function GreetUser(name = "akshay") {
    return `Welcome ${name}`;
}
console.log(GreetUser());
//Arrow function
const adding = (a, b) => a + b;
