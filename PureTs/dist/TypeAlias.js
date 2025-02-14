"use strict";
//Excersise 1
const customer = {
    ID: 10,
    name: "goushik",
    price: 200,
    category: "food",
    getDiscountedPrice(discount) {
        return this.price - discount;
    }
};
console.log(customer.getDiscountedPrice(20));
const profile1 = {
    id: 10,
    username: "ramesh",
    email: "ram@gmail",
    age: 26,
    updateEmail(newEmail) {
        this.email = newEmail;
    }
};
console.log(profile1.email);
profile1.updateEmail("rameshkumar@gmail");
console.log(profile1.email);
const RE = {
    brand: "RE",
    model: "Himalaiyan",
    year: 2012,
    isElecteric: false,
    getVehicleInfo() {
        return `${this.brand} ${this.model} ${this.year}`;
    }
};
console.log(RE.getVehicleInfo());
