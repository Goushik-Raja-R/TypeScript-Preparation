 class User{
    
    protected CourseCount:number =10;

    readonly city:string=""
    constructor(private email:string,public name:string,public age:number){
        this.email=email;
        this.name=name;
        this.age=age;
    }
    greet(){
        console.log(`hello i'm ${this.name} and i'm ${this.age} years old }`)
    }

    get GetEmailID():string{
        return `apple ID is ${this.email}`
    }

    set SetEmailId(NewEmail:string){
        this.email = NewEmail;
    }

    get GetcourseCount():number{
        return this.CourseCount
    }

 }

 class NewUser extends User{
    isFamily:boolean=true

    changeCourse(){
        this.CourseCount = 12;
    }
 }

const sreeraj = new NewUser("sreeraj@gmail.com","sreeraj",10)

sreeraj.changeCourse
console.log(sreeraj.GetcourseCount)
 
 const goushik = new User("goushik@gmail.com","goushik",21)

 goushik.greet();
 goushik.SetEmailId="goushikParameswari@gmail.com";
 
 console.log(goushik.GetEmailID)
