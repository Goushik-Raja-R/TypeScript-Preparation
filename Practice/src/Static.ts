class cake{

    static BakeryName:string="Akshay bakery"         // static member bakeryname can't be accessed by object of class

    static GetInfoBakery():string{
        return `The bakery details are ${this.BakeryName}`
    }
}

//Object cannot be created for static classes

console.log(cake.BakeryName);
console.log(cake.GetInfoBakery());

// EXCERSISE 1

class Employee{
    
     public static EmpID:number = 12;

     constructor (public Empname:string,public Designation:string){
         this.Designation=Designation;
         this.Empname=Empname
     } 

      GetEmployeeDetails(){
        return `Employee Details name ${this.Empname} and the Designation is ${this.Designation}`
     }

     static GetEmpID():number{
        return this.EmpID;
     }
}

const Employee1 = new Employee("ramesh","CA")
console.log(Employee1.GetEmployeeDetails())

console.log(Employee.GetEmpID())

