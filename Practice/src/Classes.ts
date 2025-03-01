//EXCERSISE 1

class Student{
    Name!:string;
    Rollno!:number;
    Department!:string

    constructor(name:string,rollno:number,department:string){
           this.Name=name;
           this.Rollno=rollno;
           this.Department=department;
    }

    GetStudentDetails():string{
        return `${this.Name} has a ${this.Rollno} as rollno and he is from ${this.Department} Department`
    }
}

const student1 = new Student("goushik",10,"CT")
const student2 = new Student("Akshay",11,"CS")

console.log(student1.GetStudentDetails())



//EXCERSISE 2

class bank{
    constructor(private readonly accountnumber:string,private balance:number){
        this.accountnumber=accountnumber;
        this.balance=balance
    }

    deposit(Amt:number){
        this.balance=(this.balance+Amt);
    }

    withdraw(Amt:number):string{
        if(Amt<=this.balance){
           this.balance = this.balance-Amt;
           return `Withdrawed Successfully and remaining balance is ${this.Balance}`
        }
        else{
            return "Fund is not sufficient"
        }
    }

    get Balance():number{
        return this.balance;
    }
}

const Person1 = new bank("211CT017",20000);

Person1.deposit(25000);
console.log(Person1.withdraw(50000));

console.log(Person1.Balance)


//EXCERSISE 3

class Employee{
    
    constructor(public name:string,public employeeID:number,public salary:number){
        this.name = name;
        this.employeeID=employeeID;
        this.salary=salary
    }

    getDetails():string{
        return `${this.name} has ${this.employeeID} as EMPID and his salary is ${this.salary}`
    }
}

class Manager extends Employee{

    constructor(name:string,employeeID:number,salary:number,public teamsize:number){
        super(name,employeeID,salary)
    }
    
    manageTeam():string{
        return `I have managing ${this.teamsize} members`
    }

}

class Developer extends Employee{

    constructor(name:string,employeeID:number,salary:number,public programmingLanguage:string){
        super(name,employeeID,salary)
    }

    code():string{
        return `I used to code in ${this.programmingLanguage} Language`
    }
}

const Manager1 = new Manager("barath",12,250000,5);
const Dev1 = new Developer("Sreeraj",13,300000,"Mulesoft")

console.log(Manager1.getDetails())
console.log(Dev1.getDetails())

console.log(Manager1.manageTeam())
console.log(Dev1.code())

export{}