// string ans string inbuild Functions


//CharAt() --> take a particular character which you want
var staff:string="goushik"
console.log(staff.charAt(5));
console.log(staff.charAt(3))

//Concat --> Merge two strings or more into one string
var Name:string="Sachin";
var Name1:string=" Tendulkar"

console.log(Name.concat(Name1));

//Replace -->using this we can replace Character or Word
var game:string="cricket game";

console.log(game.replace('c','C'));
console.log(game.replace('cricket','CRICKET'));

//Spilt --> this function used to spilt the characters or words in given string
var str:string="fruit banana taste";

console.log(str.split(' '));
console.log(str.split(' ',3));
console.log(str.split(' ',2));
console.log(str.split(' ',1));

//Substring --> Using this we can get any range of string from the given string
var str1:string="lokeshkanagaraj"
console.log(str1.substring(0,3));
console.log(str1.substring(7,11));

//toUppercase && toLowerCase 
var love="Parameswari";

console.log(love.toLowerCase());
console.log(love.toUpperCase());

//trim() -->trim function used to trim the things which you don't want in string
// var love1:string = "   raja   ";

// console.log(love1.trimEnd())

// console.log(love1.trimStart())

// Correct usage of trimEnd and trimStart
var love1="   raja   ";

console.log(love1.trim());