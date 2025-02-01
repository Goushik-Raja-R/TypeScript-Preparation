function addtwo(num:number):number{
     return num+2;
    // return "hsdg"
}
var ans:number = addtwo(5);
console.log(ans)

function getUpper(val:string){
    return val.toUpperCase()   
}

var answer:string = getUpper("goushik")
console.log(answer)


function UserSignUp(name:string,email:string,isPaid:boolean){

}

const getHello =(s:string):string=>{
    return "hello";
}


const heros =["batman","spiderman","ironman"]

addtwo(5)
getUpper("goushik")
UserSignUp("goushik","goushik@gmail.com",false)

heros.map((hero):string =>{
    return `hero is ${heros}`
})

function consoleError(errmsg:string): void{
    console.log(errmsg);
}

function handleError(errmsg:string): never{
    throw new Error(errmsg);
}

 


export{}