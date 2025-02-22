"use strict";
// WHY Typescript ?
Object.defineProperty(exports, "__esModule", { value: true });
// IN JS the variable can hold any type of datatypes that will lead to error example: 
// function add(a,b){  // as it is a TS it is showing error for not giving type but in Js it will not
//     return a +b
// }
// this same will not give any errors in js
function add(a, b) {
    return a + b;
}
const ans = add(4, 7);
console.log(ans);
// static typing in Ts
//Explicit Type Annotation: Specify types while declaring variables.
let username = "goushik";
let age = 21; // for every variable declaration we declare with type that prevents error
let isAdmin = true;
// function in TS
function greet(message) {
    return message + " goushik";
}
console.log(greet("you are going to make it"));
// Arrays & Objects with Types:
let scores = [1, 2, 4];
let person;
const person1 = {
    name: "goushik",
    age: 21
};
function calculate(products) {
    return products.reduce((total, product) => total + product.price, 0);
}
const cart = [{ item: "shirt", price: 300 }, { item: "jeans", price: 500 }, { item: "jogger pant", price: 700 }];
console.log(calculate(cart));
const mycart = [{ id: 1, name: "HP", price: 4000 },
    { id: 2, name: "ASUS", price: 5000 },
    { id: 3, name: "MAC", price: 6000 }
];
function calculatePrice(materials) {
    return materials.reduce((total, materials) => (total + materials.price), 0);
}
console.log(calculatePrice(mycart));
