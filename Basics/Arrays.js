//Declaration and Intialization of Array
var movies = ["mother", "I saw the devil", "Interstellar"];
console.log(movies);
var series; //decalaration
series = ["Lost", "Peaky blinders", "GOT"]; //initailization 
console.log(series);
//Muti type array
var values = ["goushik", 100, "thomas shelby"];
//or
var values1 = ["goushik", 100, "thomas shelby"];
console.log(values);
console.log(values1);
//looping through arrays
for (var i = 0; i < values.length; i++) {
    console.log(values[i]);
}
//for each loop
for (var j in values1) {
    console.log(values1[j]);
}
