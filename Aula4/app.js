console.log("hello");

let a = 1;
let b = 0;

const fibonacci = ()=>{
    for (let i = 2; i <= 10; i++) {
       const temp = a;
       a = a + b; 
       b = temp;
       console.log(a);      
    }
}

fibonacci();

/*let user = {
    id: 0,
    name: "miguel",
    age:23,
    gender: "male",
    dob:"29-03-2000",
    hobbies:["football", "films", "programing", "skate"]
}

/*for (const key in user) {
        console.log(user[key]);    
    }

  /*  const originalObject = {
        key1: "value1",
        key2: "value2",
        key3: "value3",
    }

    const entriesArray = Object.entries(originalObject);

    const transformedArray = entriesArray.map([key, value]) =>

//console.table(user);
//console.log(user);

*/

let user = {
    id: 0,
    name: "miguel",
    age:23,
    gender: "male",
    dob:"29-03-2000",
    hobbies:["football", "films", "programing", "skate"]
}

/*class User{

    name;
    age;

    constructor(user) {

        this.name = user.name;
        this.age = user.age;
        console.log("class user initiated");
    }

    getName(){
        //console.log("return the user name");

        return this.name;

    }

    getAge(){
        //console.log("return the user age");

        return this.age;
    }
}

const user2 = new User(user);
user2.name = user.name;
user2.age = user.age;
console.log(user2.getName());
console.log(user2.getAge());

const user3 ={
    name: new User(),
    age:12,
    dob: () => {return 3;}
}


//user2.getName();
//user2.getAge();

//console.log(user2);

class User{

    name;
    age;

    constructor(user) {

        this.name = user.name;
        this.age = user.age;
        console.log("class user initiated");
    }

    getName(){
        //console.log("return the user name");

        return this.name;

    }

    getAge(){
        //console.log("return the user age");

        return this.age;
    }
}

const user2 = new User(user);
user2.name = "Miguel";
console.log(user2.name);
console.log(user2.getName());

*/

/*
class Veicule{

    speed = 10;

    construtor(){


    }
}

//console.log(Veicule);

class Car extends Veicule{

    constructor(){
        super();

        this.speed = 20;

        console.log("car speed", this.speed);
    }
}

//const Car = new Car();
//console.log(Car);

class Motorcycle extends Veicule{
    
    constructor(){
        super();
        this.speed = 50;

        console.log("motorcycle speed", this.speed);
    }
}

const car = new Car();
const motorcycle = new Motorcycle();

*/


import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";

const car = new Car();
const motorcycle = new Motorcycle();