"use strict";
//Enums
Object.defineProperty(exports, "__esModule", { value: true });
var directions;
(function (directions) {
    directions[directions["up"] = 0] = "up";
    directions[directions["down"] = 1] = "down";
    directions[directions["right"] = 2] = "right";
    directions[directions["left"] = 3] = "left";
})(directions || (directions = {}));
console.log(directions.down);
console.log(directions.left);
//String enums
var colors;
(function (colors) {
    colors["red"] = "RED";
    colors["green"] = "GREEEN";
    colors["blue"] = "BLUE";
})(colors || (colors = {}));
console.log(colors.green);
//Enum with compund values
var MathOperations;
(function (MathOperations) {
    MathOperations[MathOperations["multiply"] = 21] = "multiply";
    MathOperations[MathOperations["random"] = Math.random() * 4] = "random";
})(MathOperations || (MathOperations = {}));
console.log(MathOperations.multiply);
console.log(MathOperations.random);
//Reverse Mapping
var roles;
(function (roles) {
    roles[roles["Admin"] = 1] = "Admin";
    roles[roles["user"] = 2] = "user";
    roles[roles["guest"] = 3] = "guest";
})(roles || (roles = {}));
console.log(roles.Admin);
console.log(roles[2]);
