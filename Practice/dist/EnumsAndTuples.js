"use strict";
//Enums 
Object.defineProperty(exports, "__esModule", { value: true });
var code;
(function (code) {
    code[code["success"] = 200] = "success";
    code[code["Notfound"] = 404] = "Notfound";
    code[code["Servererror"] = 500] = "Servererror";
})(code || (code = {}));
function HandlesResponse(Http) {
    if (Http == code.Notfound) {
        console.log("resource not found");
    }
    else if (Http == code.Servererror) {
        console.log("server error");
    }
    else {
        console.log("successfully");
    }
}
HandlesResponse(code.success);
//Tuples
function getUser() {
    return ["goushik", 21];
}
console.log(getUser());
//EXCERISE 1
let user;
user = ["sreeraj", 26, true];
console.log(user[0]);
console.log(user[1]);
console.log(user[2]);
let num;
num = [23, 45];
function swap(num) {
    var ans = num[0];
    num[0] = num[1];
    num[1] = ans;
}
swap(num);
console.log(num);
