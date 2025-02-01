"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addtwo(num) {
    return num + 2;
    // return "hsdg"
}
var ans = addtwo(5);
console.log(ans);
function getUpper(val) {
    return val.toUpperCase();
}
var answer = getUpper("goushik");
console.log(answer);
function UserSignUp(name, email, isPaid) {
}
var getHello = function (s) {
    return "hello";
};
var heros = ["batman", "spiderman", "ironman"];
addtwo(5);
getUpper("goushik");
UserSignUp("goushik", "goushik@gmail.com", false);
heros.map(function (hero) {
    return "hero is ".concat(heros);
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    throw new Error(errmsg);
}
