var num1 = 20;
if (num1 % 2 == 0) {
    console.log("Even number");
}
else {
    console.log("Odd number");
}
//nested IF clause
var a = 20;
var bb = 30;
var cc = 50;
if (a > bb && a > cc) {
    console.log(a + " is greater");
}
else if (bb > a && bb > cc) {
    console.log(bb + " is greater");
}
else {
    console.log(cc + " is greater");
}
//trenary operator
var person = 10;
var person1 = 30;
person > person1 ? console.log(person + " is greater") : console.log(person1 + " is the greatest");
