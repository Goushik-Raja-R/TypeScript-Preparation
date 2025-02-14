//Excersise 1

type product= {
    ID:number;
    name:string;
    price:number;
    category?:string;

    getDiscountedPrice:(discount:number)=>number
}

const customer:product={
    ID:10,
    name:"goushik",
    price:200,
    category:"food",

    getDiscountedPrice(discount) {
        return this.price - discount;
    }
}
console.log(customer.getDiscountedPrice(20));


//Excersise two

type UserProfile ={
    readonly id:number;
    username:string;
    email:string;
    age?:number;
    updateEmail(NewEmail:string):void
}

const profile1:UserProfile={
    id:10,
    username:"ramesh",
    email:"ram@gmail",
    age:26,
    updateEmail(newEmail){
       this.email=newEmail
    }
}

console.log(profile1.email)

profile1.updateEmail("rameshkumar@gmail")

console.log(profile1.email)


// Excersie : 3

type vechile ={
    brand:string;
    model:string;
    year:number;
    isElecteric:boolean;
    getVehicleInfo:()=>string
}

const RE:vechile={
    brand:"RE",
    model:"Himalaiyan",
    year:2012,
    isElecteric:false,

    getVehicleInfo(){
        return `${this.brand} ${this.model} ${this.year}`
    }
}

console.log(RE.getVehicleInfo())