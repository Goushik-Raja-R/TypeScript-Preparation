//type inference 

const user={
    name:"goushik", //here TS can automatically infer the type of an object
    age:21,
    isActive:true
}

console.log(user.name)

//Explicit type giving

const user1:{name:string}={
    name:"sreeraj"
}

//type defines the structure where object defined Key value pairs

type user={
    name:string,
    age:number
}

const user2:user={
    name:"bhuvanesh",
    age:26
}
