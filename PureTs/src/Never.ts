interface Circle{
    kind:"circle";
    radius: number;
}

interface Square{

    kind:"square";
    side:number;
}

interface Rectangle{
    kind:"Rectangle";
    width:number;
    height:number;
}

type Shape = Circle|Rectangle|Square

function GetArea(shape:Shape):number{
      
      switch(shape.kind){
        case "circle":
            return Math.PI * shape.radius**2;
        case "square":
            return shape.side*shape.side
        case "Rectangle":
            return shape.width * shape.height

        default:
            const _exhasutivesness:never = shape
            return  _exhasutivesness
      }

}

const circle:Circle={
    kind:"circle",
    radius:5
}

const square:Square={
    kind:"square",
    side:4
}

console.log(GetArea(square))
console.log(GetArea(circle))