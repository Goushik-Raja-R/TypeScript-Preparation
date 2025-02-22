"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Buyer1 = {
    OrderId: 2,
    OrderPlace: "tirupur",
    ProductID: 5,
    Price: 50000,
    ProductName: "HP Laptop",
    UserID: 10,
    Username: "Sreeraj",
    Details() {
        return `${Buyer1.Username} bought ${Buyer1.ProductName} for ${Buyer1.Price} in ${Buyer1.OrderPlace}`;
    },
};
console.log(Buyer1.Details());
