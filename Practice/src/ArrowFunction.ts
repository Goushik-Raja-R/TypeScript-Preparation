const menu=[{Item:"Briyani",Price:100},
    {Item:"Mutton Briyani",Price:200},
    {Item:"prawn Briyani",Price:150}
]

const affordableDishes = menu.filter(dish=>dish.Price <= 150 )

console.log(affordableDishes)

//Excersise 1 

const books = [
    { title: "Atomic Habits", author: "James Clear", price: 450 },
    { title: "The Alchemist", author: "Paulo Coelho", price: 350 },
    { title: "Deep Work", author: "Cal Newport", price: 600 },
    { title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 300 },
    { title: "The Psychology of Money", author: "Morgan Housel", price: 550 }
];

const affordableBooks = books.filter(study=>study.price < 500).map(study=>study.title)

console.log(affordableBooks)


//Excersise 2

const Movies=[{Name:"Interstellar",Price:300,Rating:9},
    {Name:"12 Angry Men",Price:250,Rating:10},
    {Name:"Anora",Price:200,Rating:6},
    {Name:"Drishyam 2",Price:150,Rating:7},
    {Name:"Inglorious Basterds",Price:210,Rating:8}
]

var num:number= 4;
var HighRated:number=0;

for(var i:number=0;i<Movies.length;i++){
    if(Movies[i].Rating>num){
        HighRated = Movies[i].Price
        num=Movies[i].Rating
    }
}

HighRated = HighRated*3;

console.log(`The total amount of TicketCost for Three members is ${HighRated}`)