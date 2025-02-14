// type narrowing

function checking(val:number|string){

    if(typeof val == "string"){
        console.log(`The val is the typeof ${typeof(val)}` )
    }else{
        console.log("Number datatype")
    }
}

checking(2);

//Example two in class
class Car{

    drive(){
        console.log("driving a car");
    }
}

class Bike{
    ride(){
        console.log("riding a bike");
        
    }
}

function useVehicle(vechile: Car| Bike){
    if(vechile instanceof Car){
        vechile.drive();
    }else{
        vechile.ride();
    }
}

const bmw = new Car();
const yamaha = new Bike();

useVehicle(bmw);

//IN operator
type Dog = {
    bark():void;
}

type Cat ={
    meow:()=>void
}

function petsound(sound:Dog|Cat){
    if("bark" in sound){ //typescript now knows it's a dog 
       console.log(`this is ${sound.bark}`);
    }else{
        sound.meow
    }
}

const mydog:Dog={
   bark(){
    console.log("barking")
   }
}

mydog.bark()