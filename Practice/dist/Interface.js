"use strict";
//INTERFACE
Object.defineProperty(exports, "__esModule", { value: true });
const Laptop = {
    ProductName: "HP",
    Price: 45000,
    StockAvailability: true,
    DisplayInfo() {
        return `${this.ProductName} price is ${this.Price} is stock available ${this.StockAvailability}`;
    }
};
console.log(Laptop.DisplayInfo());
const Person1 = {
    Name: "goushik",
    Age: 21,
    Gender: "Male",
    Greeting() {
        console.log(`Welcom ${Person1.Name}`);
    }
};
Person1.Greeting();
const Leo = {
    Title: "Untammed Lion",
    Author: "Lokesh Kanagaraj",
    PublishedYear: 2023
};
console.log(Leo.Author);
const goushik = {
    Email: "goushik@gmail.com"
};
console.log(goushik.PhoneNumber); //it will give undefined
const Businessman = {
    ExistingMoney: 200000,
    Deposit(DepositMoney) {
        var val = Businessman.ExistingMoney + DepositMoney;
        return val;
    },
    Withdraw(WithdrawMoney) {
        var val = Businessman.ExistingMoney - WithdrawMoney;
        return val;
    }
};
console.log(Businessman.Deposit(20000));
console.log(Businessman.Withdraw(25000));
const KaranKalimuthu = {
    Name: "Karan",
    Age: 21,
    Gender: "male",
    Greeting() {
        console.log(`Welcome ${KaranKalimuthu.Name}`);
    },
    EmployeeID: "IQZ211",
    Department: "Software Engineer"
};
console.log(KaranKalimuthu.EmployeeID);
console.log(KaranKalimuthu.Department);
KaranKalimuthu.Greeting();
const Myclass = {
    ClassName: "Computer Technology 2024",
    Students: [{ StudentID: 1, StudentName: "goushik", age: 21 },
        { StudentID: 2, StudentName: "MathuVarsan", age: 21 }
    ]
};
console.log(Myclass.Students);
const add = {
    add(num) {
        return num + num;
    }
};
const isLogged = {
    log(message) {
        console.log(message);
    }
};
isLogged.log("User is Logged");
console.log(add.add(34));
