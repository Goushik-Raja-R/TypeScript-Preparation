var students = /** @class */ (function () {
    function students(S_ID, S_name) {
        this.S_ID = S_ID;
        this.S_name = S_name;
        this.S_ID = S_ID;
        this.S_name = S_name;
    }
    students.prototype.getStudentID = function () {
        return this.S_ID;
    };
    students.prototype.getStudentName = function () {
        return this.S_name;
    };
    return students;
}());
var student1 = new students(10, "goushik");
console.log(student1.S_ID);
console.log(student1);
