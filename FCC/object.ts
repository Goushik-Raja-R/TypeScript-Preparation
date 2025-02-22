const User ={
    name:"goushik",
    email:"goushik@mail.com",
    isActive:true
}

//Every time when i call this function it will return --> Emp:"goushik",isPaid:true
function CreateUser():{Emp:string,isPaid:boolean}{
    return{Emp:"goushik",isPaid:true}
}
const candidate = CreateUser();

console.log(candidate)

// passing arguements through functions
function CreateEmployee({Empname,Age}:{Empname:string,Age:number}){
    return{Empname,Age}
}

const ans = CreateEmployee({Empname:"akshay",Age:25});

console.log(ans)

// Defining Object in TS

let User1 :{name:string;email:string;isCorrect:boolean}={
    name:"sreeraj",
    email:"sreeraj@gmail.com",
    isCorrect:true
}
console.log(User1.isCorrect)

// Optional and readonly properties

type user2={
    name:string;
    email:string;
    readonly id:number;
    age?:number;
}

const store:user2 = {name:"barath",email:"barathebk@gmail",id:10};
console.log(store)

//object with methods

type human ={
    name:string;
    sayhello:()=>string;  
}

const answer:human ={
    name:"bhuvanesh",
   // sayhello:() =>"hello welcome"
    sayhello(){
        return "hello welcome"
    }
}

console.log(answer.sayhello());

let emp:{name:string,empid:number}={
    name:"akshay",
    empid:10
}
 
console.log(emp)


type being ={
    name:string;
    sayhi:()=>string
}

const being1:being={
    name:"barath",
    sayhi(){
        return "hi"
    }
}
console.log(being1.sayhi());


export{}