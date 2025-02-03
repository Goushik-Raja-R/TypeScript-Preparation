//Enums

enum directions{
    up,
    down,
    right,
    left
}

console.log(directions.down);
console.log(directions.left);

//String enums

enum colors{
    red = "RED",
    green = "GREEEN",
    blue = "BLUE"
}

console.log(colors.green)

//Enum with compund values

enum MathOperations{
    multiply = 4*4+5,
    random = Math.random()*4
}

console.log(MathOperations.multiply)
console.log(MathOperations.random)

//Reverse Mapping

enum roles{
    Admin = 1,
    user,
    guest
}

console.log(roles.Admin)
console.log(roles[2]);


export{}