interface Order{
    OrderId:number,
    OrderPlace:string
}

interface Product{
    ProductID:number,
    ProductName:string,
    Price:number
}

interface User extends Order,Product{
    UserID:number,
    Username:string

    Details():string
}

const Buyer1:User={
     OrderId:2,
     OrderPlace:"tirupur",
     ProductID:5,
     Price:50000,
     ProductName:"HP Laptop",
     UserID:10,
     Username:"Sreeraj",
     Details():string{
         return `${Buyer1.Username} bought ${Buyer1.ProductName} for ${Buyer1.Price} in ${Buyer1.OrderPlace}`
     },
}

console.log(Buyer1.Details());


export{}