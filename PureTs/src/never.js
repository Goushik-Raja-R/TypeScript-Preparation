function GetArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return shape.side * shape.side;
        case "Rectangle":
            return shape.width * shape.height;
        default:
            var _exhasutivesness = shape;
            return _exhasutivesness;
    }
}
var circle = {
    kind: "circle",
    radius: 5
};
var square = {
    kind: "square",
    side: 4
};
var pyramid = {
    kind: "Pyramid",
    side: 4
};
console.log(GetArea(pyramid));
console.log(GetArea(square));
console.log(GetArea(circle));
