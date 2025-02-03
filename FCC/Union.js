function GetId(ID) {
    if (typeof ID === "string") {
        console.log(ID.toLocaleLowerCase());
    }
    else {
        console.log(ID);
    }
}
GetId("goushik");
GetId(2);
var data = [1, 2, 3]; //only numbers
var data1 = ["a", "b", "c"]; //only string
var data2 = [1, 2, 3]; //either number or string
var data3 = [1, 2, "jsg", true]; //we can use three of the type
