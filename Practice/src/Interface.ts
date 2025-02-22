//INTERFACE

//EXCERISE 1

interface Product{
    ProductName:string,
    Price:number,
    StockAvailability:boolean
    DisplayInfo():string
}

const Laptop:Product={
    ProductName:"HP",
    Price:45000,
    StockAvailability:true,

    DisplayInfo():string{
    return `${this.ProductName} price is ${this.Price} is stock available ${this.StockAvailability}`
    }
}
console.log(Laptop.DisplayInfo())

//EXCERISE 2

interface Person{
    Name:string,
    Age:number,
    Gender:string

    Greeting():void
}

const Person1:Person={
    Name:"goushik",
    Age:21,
    Gender:"Male",
    Greeting():void{
       console.log(`Welcom ${Person1.Name}`);  
    }
}

Person1.Greeting();

interface Book{
    readonly Title:string,
    Author:string,
    PublishedYear:number
}

const Leo:Book={
    Title:"Untammed Lion",
    Author:"Lokesh Kanagaraj",
    PublishedYear:2023
}

console.log(Leo.Author)

//EXCERISE 3

interface UserProfile{
    Email:string,
    PhoneNumber?:number
}

const goushik:UserProfile={
    Email:"goushik@gmail.com"
}

console.log(goushik.PhoneNumber); //it will give undefined


interface Bank{
    ExistingMoney:number,

    Deposit(DepositMoney:number):number
    Withdraw(WithdrawMoney:number):number
}

const Businessman:Bank={
    ExistingMoney:200000,

    Deposit(DepositMoney:number):number {
        var val:number=Businessman.ExistingMoney+DepositMoney;
        return val
    },

    Withdraw(WithdrawMoney:number):number {
       var val:number = Businessman.ExistingMoney-WithdrawMoney;
        return val
    }
}

console.log(Businessman.Deposit(20000))
console.log(Businessman.Withdraw(25000))

//EXCERSISE 4

interface Employee extends Person{
    EmployeeID:string,
    Department:string
}

const KaranKalimuthu:Employee={
      Name:"Karan",
      Age:21,
      Gender:"male",

      Greeting():void{
          console.log(`Welcome ${KaranKalimuthu.Name}`)
      },
      EmployeeID:"IQZ211",
      Department:"Software Engineer"
}

console.log(KaranKalimuthu.EmployeeID);
console.log(KaranKalimuthu.Department);
KaranKalimuthu.Greeting()


//EXCERSISE 5

interface student{
    StudentID:number,
    StudentName:string,
    age:number
}

interface Classroom{
    ClassName:string,
    Students:student[]
}

const Myclass:Classroom={
    ClassName:"Computer Technology 2024",
    Students:[{StudentID:1,StudentName:"goushik",age:21},
             {StudentID:2,StudentName:"MathuVarsan",age:21}
    ]
} 

console.log(Myclass.Students);


//EXCERSISE:6

interface Calculator{
    add(num:number):number
}
interface Logger{
    log(message:string):void
}

const add:Calculator={
    add(num:number):number{
        return num+num
    }
}

const isLogged:Logger={
    log(message:string):void{
        console.log(message)
    }
}

isLogged.log("User is Logged")
console.log(add.add(34));

export{}