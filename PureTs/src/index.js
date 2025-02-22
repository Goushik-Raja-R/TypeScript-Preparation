var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(email, name, age) {
        this.email = email;
        this.name = name;
        this.age = age;
        this.CourseCount = 10;
        this.city = "";
        this.email = email;
        this.name = name;
        this.age = age;
    }
    User.prototype.greet = function () {
        console.log("hello i'm ".concat(this.name, " and i'm ").concat(this.age, " years old }"));
    };
    Object.defineProperty(User.prototype, "GetEmailID", {
        get: function () {
            return "apple ID is ".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "SetEmailId", {
        set: function (NewEmail) {
            this.email = NewEmail;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "GetcourseCount", {
        get: function () {
            return this.CourseCount;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var NewUser = /** @class */ (function (_super) {
    __extends(NewUser, _super);
    function NewUser() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isFamily = true;
        return _this;
    }
    NewUser.prototype.changeCourse = function () {
        this.CourseCount = 12;
    };
    return NewUser;
}(User));
var sreeraj = new NewUser("sreeraj@gmail.com", "sreeraj", 10);
sreeraj.changeCourse;
console.log(sreeraj.GetcourseCount);
var goushik = new User("goushik@gmail.com", "goushik", 21);
goushik.greet();
goushik.SetEmailId = "goushikParameswari@gmail.com";
console.log(goushik.GetEmailID);
var person = /** @class */ (function () {
    function person(name, email, pID) {
        this.name = name;
        this.email = email;
        this.pID = pID;
        this.name = name;
        this.email = email;
        this.pID = pID;
    }
    Object.defineProperty(person.prototype, "GetName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(person.prototype, "SetName", {
        set: function (NewName) {
            this.name = NewName;
        },
        enumerable: false,
        configurable: true
    });
    return person;
}());
var person1 = new person("goushik", "goushik@gmail.com", 10);
console.log(person1.GetName);
person1.SetName = "goushik_raja";
console.log(person1.GetName);
