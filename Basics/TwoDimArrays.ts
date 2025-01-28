//Two dimensional array 

var names:string[][]=[["goushik","thomas"],         
                       ["shelby","ragnar"],
                       ["walter white","jessie pinkman"]];

for(let i=0;i<names.length;i++){

    for(let j=0;j<names[i].length;j++){

        console.log(names[i][j]);

    }
}

for(let i in names){

    for(let j in names[i]){

        console.log(names[i][j]);
    }
}