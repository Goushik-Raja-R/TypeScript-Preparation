var IsWeGotBatc:boolean=false

function CricketBatBuying(){
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
           if(IsWeGotBatc){
                resolve(`Yes we got new bat`)
           }else{
                reject(`The bat we thought to buy is not there`)
           }
        },1000)
    })
}

function BuyBat(){
    CricketBatBuying().then((message)=>{
         console.log(message)
    }).catch((error)=>{
        console.log(error)
    }).finally(()=>{
        console.log("Go home boys");
        
    })
}

BuyBat();
console.log("hello")