// PRIMITIVE DATA TYPES IN TYPESCRIPT

//Number

var num4:number=30.0;
var num1:number=0x37CF;
var num2:number=0o377;
var num3:number=0b11101;

console.log(num4);
console.log(num1);
console.log(num2);
console.log(num3);

//String

var empname:String="goushik"
var domain:String="Full stack developer"

var statement:String=empname+" Work as a "+domain;

console.log(statement);

//Boolean

var result:Boolean=true;

console.log(result);

//Void type

function start():void{
    console.log("Welcome All")
}
start();

//Null --> Represent the values whoes value are undefined

// var second2:string=null;
// second2="101";
// console.log(second2);

//Undefined -->it denotes all the uninitialized variables

var third3:string="undefined";
third3="200";
console.log(third3);

//Any type --> can store any type of data

var answer:any=100;
console.log(answer);

answer="Hello all"
console.log(answer);

answer=false;
console.log(answer);

function res(x:any,y:any){
    console.log(x+y);
}

res(10,20);
res("goushik ","raja")
