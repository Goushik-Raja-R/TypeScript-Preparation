//Type alias is a way to give new name to existing type

type adding={
    a:number;
    b:number
}

function addition(add:adding):number{
    return add.a+add.b
}

var ans = addition({a:10,b:20})
console.log(ans)


// Excersise 1

type person={
    firstname:string;
    lastname:string;
    age:number;
    isStudent:boolean;
}

function CheckStudent(student:person){
    if(student.isStudent){
    console.log(`Name of the student ${student.firstname} ${student.lastname}`)
    }
}

CheckStudent({firstname:"goushik",lastname:"raja",age:21,isStudent:false})


//Exercise 2

type ID={
    UserId?:string;
    OrderId?:number;
}

function printID(order:ID){
    if(order.OrderId){
        console.log(`OrderId is ${order.OrderId}`)
    }
    console.log(`userId is ${order.UserId}`)
}

printID({UserId:"Goushik10",OrderId:21})


type User={
    name:string;
    ID:number;
}

type NewUser = Pick<User,"name">;

function printing(one:NewUser):string{
     return one.name
}
console.log(printing({name:"goushik"}))

export{}