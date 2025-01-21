//Scope Variables are VAR,LET & CONST = "These are the keywords used to declare variables"
//VAR
function first() {
    if (true) {
        var name = "goushik"; //VAR can be accessed inside the function only 
        console.log(name); //ok
    }
    console.log(name); //ok
}
first();
//console.log(name); --> (error) = because the var name was declared inside the function, It can be accessed inside the function block only
//LET
function second() {
    if (true) {
        var TeacherName = "sellakumar";
        console.log(TeacherName); // ok
    }
    //  console.log(TeacherName) --> (error) = because it can access only inside that block of code
}
second();
