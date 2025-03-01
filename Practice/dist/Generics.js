"use strict";
//Generics in function
Object.defineProperty(exports, "__esModule", { value: true });
function identify(val) {
    return val;
}
console.log(identify(25));
const person1 = {
    name: "akshay",
    age: 26
};
console.log(person1.age);
//Generics in CLASS
class box {
    constructor(content) {
        this.content = content;
    }
    Getvalue() {
        return this.content;
    }
}
const userperson = new box("sreeraj");
console.log(userperson.Getvalue());
