"use strict";
//Type alias is a way to give new name to existing type
Object.defineProperty(exports, "__esModule", { value: true });
function addition(add) {
    return add.a + add.b;
}
var ans = addition({ a: 10, b: 20 });
console.log(ans);
function CheckStudent(student) {
    if (student.isStudent) {
        console.log("Name of the student ".concat(student.firstname, " ").concat(student.lastname));
    }
}
CheckStudent({ firstname: "goushik", lastname: "raja", age: 21, isStudent: false });
function printID(order) {
    if (order.OrderId) {
        console.log("OrderId is ".concat(order.OrderId));
    }
    console.log("userId is ".concat(order.UserId));
}
printID({ UserId: "Goushik10", OrderId: 21 });
