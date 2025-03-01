"use strict";
function CheckDiscount(TotalAmount) {
    if (TotalAmount >= 500) {
        return TotalAmount - 100;
    }
    else {
        return TotalAmount - 50;
    }
}
const DooDeeRestaturant = {
    Time: "Morning",
    MenuDetails: [{ Items: "Idly", Price: 40 },
        { Items: "Dosa", Price: 50 },
        { Items: "poori", Price: 60 },
        { Items: "Masal Dosa", Price: 100 }
    ],
    OrderedFoods(Item, Price, Quantity) {
        var TotalAmount = Price * Quantity;
        var store = TotalAmount;
        TotalAmount = CheckDiscount(TotalAmount);
        if (TotalAmount + 100 === store) {
            return `you got 10% offer bcz total Price ${store} is greater than 500 But Final price to pay is ${TotalAmount}`;
        }
        else {
            return `you got 5% offer bcz total Price ${store} is lesser than 500 But Final price to pay is ${TotalAmount}`;
        }
    },
};
console.log(DooDeeRestaturant.OrderedFoods("Dosa", 40, 8));
