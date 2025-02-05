 class User{
    
    readonly city:string=""

    constructor(public email:string,public name:string,public age:number){
        this.email=email;
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`hello i'm ${this.name} and i'm ${this.age} years old }`)
    }
 }

 const goushik = new User("goushik@gmail.com","goushik",21)
 goushik.greet();