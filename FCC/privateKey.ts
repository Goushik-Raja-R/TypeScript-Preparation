class person{
   
    constructor(private age:number){ // private property age can be only access within the class
        this.age=age;
    }

    private Getage(){  // private method can access only within the class
        return this.age
    }

    public Showage(){ // As it is a public method it can be accessed outside the class
        return this.age
    }
}

const person1 = new person(21);
console.log(person1.Showage()) // work

// console.log(person1.Getage()) not work

// console.log(person1.age) not work