// WHY Typescript ?

// IN JS the variable can hold any type of datatypes that will lead to error example: 

// function add(a,b){  // as it is a TS it is showing error for not giving type but in Js it will not
//     return a +b
// }

// this same will not give any errors in js

function add(a:number,b:number):number{ // Now with proper 
    return a + b;
}

const ans = add(4,7);

console.log(ans)


// static typing in Ts

//Explicit Type Annotation: Specify types while declaring variables.

let username:string="goushik";
let age:number=21;                    // for every variable declaration we declare with type that prevents error
let isAdmin:boolean=true;   


// function in TS

function greet(message:string):string{
    return message + " goushik"
}

console.log(greet("you are going to make it"))

// Arrays & Objects with Types:

let scores:number[]=[1,2,4];

let person:{
    name:string,
    age:number
}

const person1: typeof person={
    name:"goushik",
    age:21
}


//example : Arryas and Object

type product={
   item:string,
   price:number
}

function calculate(products:product[]):number{
    return products.reduce((total,product)=>total+product.price,0)
}
const cart:product[]=[{item:"shirt",price:300},{item:"jeans",price:500},{item:"jogger pant",price:700}]
console.log(calculate(cart));

type laptop={
    id:number,
    name:string,
    price:number
}

const mycart:laptop[]=[{id:1,name:"HP",price:4000},
                       {id:2,name:"ASUS",price:5000},
                       {id:3,name:"MAC",price:6000}
]

function calculatePrice(materials:laptop[]):number{
    return materials.reduce((total,materials)=>(total+materials.price),0)
}

console.log(calculatePrice(mycart))

export{}