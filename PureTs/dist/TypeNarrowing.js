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
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.drive = function () {
        console.log("driving a car");
    };
    return car;
}());
var bike = /** @class */ (function () {
    function bike() {
    }
    bike.prototype.ride = function () {
        console.log("riding a bike");
    };
    return bike;
}());
function useVehicle(vechile) {
    if (vechile instanceof car) {
        vechile.drive();
    }
    else {
        vechile.ride();
    }
}
