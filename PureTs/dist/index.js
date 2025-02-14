"use strict";
class User {
    constructor(email, name, age) {
        this.email = email;
        this.name = name;
        this.age = age;
        this.CourseCount = 10;
        this.city = "";
        this.email = email;
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`hello i'm ${this.name} and i'm ${this.age} years old }`);
    }
    get GetEmailID() {
        return `apple ID is ${this.email}`;
    }
    set SetEmailId(NewEmail) {
        this.email = NewEmail;
    }
    get GetcourseCount() {
        return this.CourseCount;
    }
}
class NewUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourse() {
        this.CourseCount = 12;
    }
}
const sreeraj = new NewUser("sreeraj@gmail.com", "sreeraj", 10);
sreeraj.changeCourse;
console.log(sreeraj.GetcourseCount);
const goushik = new User("goushik@gmail.com", "goushik", 21);
goushik.greet();
goushik.SetEmailId = "goushikParameswari@gmail.com";
console.log(goushik.GetEmailID);
