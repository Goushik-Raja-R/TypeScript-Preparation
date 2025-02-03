function GetId(ID:number|string){
    if(typeof ID ==="string"){
        console.log(ID.toLocaleLowerCase() )
    }else{
        console.log(ID)
    }
}

GetId("goushik");
GetId(2);

const data: number[]=[1,2,3]; //only numbers

const data1:string[]=["a","b","c"] //only string

const data2:number[]|string[]=[1,2,3] //either number or string

const data3:(number|string|boolean)[]=[1,2,"jsg",true] //we can use three of the type