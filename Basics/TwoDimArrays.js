//Two dimensional array 
var names = [["goushik", "thomas"],
    ["shelby", "ragnar"],
    ["walter white", "jessie pinkman"]];
for (var i = 0; i < names.length; i++) {
    for (var j = 0; j < names[i].length; j++) {
        console.log(names[i][j]);
    }
}
for (var i in names) {
    for (var j in names[i]) {
        console.log(names[i][j]);
    }
}
