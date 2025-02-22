// Generics class

class One<t>{
    val:t;
    constructor(val:t){
        this.val=val;
    }

    GetValue():t{
        return this.val
    }
}

const two = new One(10);

console.log(two.GetValue());


// generics Functions

function answer<t>(value:t):t{
    return value;
}

console.log(answer("barath akshay bhuvanesh"));


function GettheValue<T>(products:T[]):T{
     const myindex = 2;
     return products[myindex]
}

//arrow function 

const GetValues = <T,>(products:T[]):T =>{
    const index=1;
    return products[index]
}

interface quiz{
    department:string,
    domain:string
}

interface course{
    name:string,
    author:string,
    subject:string
}

class BookSelling<T>{
    cart:T[] = [] // this cart is arrya of type <T> 
 
    addtocart(product:T){
        this.cart.push(product) // push product into cart array
    }
}

const store = new BookSelling<string>();
store.addtocart("hi")
store.addtocart("hello")
console.log(store.cart)

function checking<T> (value:T):T{
     return value
}

console.log(checking<string>("goushik"))