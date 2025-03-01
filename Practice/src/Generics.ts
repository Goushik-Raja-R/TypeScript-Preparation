//Generics in function

function identify<T>(val:T):T{
    return val;
}

console.log(identify<number>(25));


//Generics in INTERFACE

interface person<T,U>{
    name:T,
    age:U
}

const person1:person<string,number>={
    name:"akshay",
    age:26
} 

console.log(person1.age);


//Generics in CLASS

class box<T>{
    
    private content!: T

    constructor(content:T){
         this.content=content
    }

    Getvalue():T{
        return this.content
    }
}

const userperson = new box<string>("sreeraj")

console.log(userperson.Getvalue())

export{}