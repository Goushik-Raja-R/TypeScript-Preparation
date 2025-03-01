//Enums 

enum code{
    success = 200,
    Notfound = 404,
    Servererror =500
}

function HandlesResponse(Http:code){
    if(Http==code.Notfound){
        console.log("resource not found")
    }else if(Http==code.Servererror){
        console.log("server error")
    }else{
        console.log("successfully")
    }
}

HandlesResponse(code.success);

//Tuples

function getUser():[string,number]{
    return ["goushik",21]
}

console.log(getUser());

//EXCERISE 1

let user:[string,number,boolean];

user = ["sreeraj",26,true]

console.log(user[0])
console.log(user[1])
console.log(user[2])

let num: [number,number]

num=[23,45];

function swap(num:[number,number]){
     var ans:number = num[0];
     num[0]=num[1];
     num[1]=ans;
}

swap(num)

console.log(num)

export{}