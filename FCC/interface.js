"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var person1 = {
    id: 10,
    name: "goushik",
    age: 21,
    isStudent: true,
    googleID: "goushik@google.com",
    strattrail: function () {
        return "you are going to make it";
    },
    getcoupon: function (name, num) {
        return 10;
    }
};
console.log(person1);
console.log(person1.strattrail());
console.log(person1.getcoupon("Leo", 10));
var customer = {
    id: 11,
    name: "akshay",
    price: 2000,
    getDiscountedPrice: function (discount) {
        return 22;
    }
};
console.log(customer);
console.log(customer.getDiscountedPrice(25));
var User1 = {
    userId: 12,
    username: "Sreeraj",
    email: "Sreeraj@gmail.com",
    login: function () {
        console.log("".concat(this.username, " is logged in"));
    }
};
console.log(User1);
console.log(User1.login());
