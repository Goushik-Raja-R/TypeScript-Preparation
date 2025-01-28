function addtwo(num:number):number|string{
     return num+2;
    // return "hsdg"
}

function getUpper(val:string){
    return val.toUpperCase()   
}

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