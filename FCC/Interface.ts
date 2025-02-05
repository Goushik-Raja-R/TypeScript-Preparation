interface person{
    readonly id:number;
    name:string;
    age:number;
    isStudent:boolean
    googleID?:string
    strattrail: () =>string
    getcoupon(couponname:string,couponnumber:number):number
}

const person1:person={
    id:10,
    name:"goushik",
    age:21,
    isStudent:true,
    googleID:"goushik@google.com",
    strattrail:()=>{
        return "you are going to make it"
    },
    getcoupon(name:"Leo",num:10){
        return 10;
    }

}

console.log(person1)
console.log(person1.strattrail())
console.log(person1.getcoupon("Leo",10))


//Excerise 1

interface product{
    readonly id:number;
    name:string;
    price:number;
    category?:string;
    getDiscountedPrice(discount:number):number
}

const customer:product = {
    id:11,
    name:"akshay",
    price:2000,
    getDiscountedPrice(discount:12) {
        return 22
    }
}

console.log(customer);
console.log(customer.getDiscountedPrice(25))

//Excersise 2

interface user{
    readonly userId:number;
    username:string;
    email:string;
    login():void;
}

const User1:user={
    userId:12,
    username:"Sreeraj",
    email:"Sreeraj@gmail.com",
    login(){
      console.log(`${this.username} is logged in`)
    }
}

console.log(User1);


export{}