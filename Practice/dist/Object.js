"use strict";
//type inference 
const user = {
    name: "goushik", //here TS can automatically infer the type of an object
    age: 21,
    isActive: true
};
console.log(user.name);
//Explicit type giving
const user1 = {
    name: "sreeraj"
};
const user2 = {
    name: "bhuvanesh",
    age: 26
};
