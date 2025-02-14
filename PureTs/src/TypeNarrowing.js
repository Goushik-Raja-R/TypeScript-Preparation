// type narrowing
function checking(val) {
    if (typeof val == "string") {
        console.log("The val is the typeof ".concat(typeof (val)));
    }
    else {
        console.log("Number datatype");
    }
}
checking(2);
//Example two in class
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("driving a car");
    };
    return Car;
}());
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.ride = function () {
        console.log("riding a bike");
    };
    return Bike;
}());
function useVehicle(vechile) {
    if (vechile instanceof Car) {
        vechile.drive();
    }
    else {
        vechile.ride();
    }
}
var bmw = new Car();
var yamaha = new Bike();
useVehicle(bmw);
function petsound(sound) {
    if ("bark" in sound) { //typescript now knows it's a dog 
        console.log("this is ".concat(sound.bark));
    }
    else {
        sound.meow;
    }
}
var mydog = {
    bark: function () {
        console.log("barking");
    }
};
mydog.bark();
