var person = /** @class */ (function () {
    function person(age) {
        this.age = age;
        this.age = age;
    }
    person.prototype.Getage = function () {
        return this.age;
    };
    person.prototype.Showage = function () {
        return this.age;
    };
    return person;
}());
var person1 = new person(21);
console.log(person1.Showage()); // work
// console.log(person1.Getage()) not work
// console.log(person1.age) not work
