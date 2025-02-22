//Declaration and Intialization of Array

var movies:string[]=["mother","I saw the devil","Interstellar"]
console.log(movies);

var series:Array<string>; //decalaration
series=["Lost","Peaky blinders","GOT"]; //initailization 
console.log(series);

//Muti type array
var values:(string|number)[]=["goushik",100,"thomas shelby"];
//or
var values1:Array<string|number>=["goushik",100,"thomas shelby"];

console.log(values);
console.log(values1);

//looping through arrays
for(var i:number=0;i<values.length;i++){
 
    console.log(values[i]);
}

//for each loop

for(var j in values1){
    console.log(values1[j]);
}


type User={
    name:string;
    isActive:boolean;
}

const newArray:User[] = [];

newArray.push({name:"goushik",isActive:true});
newArray.push({name:"Akshay",isActive:true})

console.log(newArray[0])

var list:string[] =["kwnd","kwdkj","fcsgw"]
console.log(list)

export{}
