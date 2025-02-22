//Functions in TypeScript work similarly to JavaScript but with added type safety

function add(a:number,b:number):number{ // without giving the type to ts it will show error
     return a+b;
}

console.log(add(10,16));

//Optional parameters

function greet(name:string,age?:number):string{
    if(age){
    return `my name is ${name} and my age is ${age}`
    }else{
        return `my name is ${name}`
    }
}

console.log(greet("goushik",21))


export{}

//default parameters

function GreetUser(name:string="akshay"):string{
    return `Welcome ${name}`
}

console.log(GreetUser())


//Arrow function

const adding = (a:number,b:number):number => a+b; 