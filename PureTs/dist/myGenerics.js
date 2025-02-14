"use strict";
// Generics class
class One {
    constructor(val) {
        this.val = val;
    }
    GetValue() {
        return this.val;
    }
}
const two = new One(10);
console.log(two.GetValue());
// generics Functions
function answer(value) {
    return value;
}
console.log(answer("barath akshay bhuvanesh"));
function GettheValue(products) {
    const myindex = 2;
    return products[myindex];
}
//arrow function 
const GetValues = (products) => {
    const index = 1;
    return products[index];
};
