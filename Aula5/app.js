import Car from "./Car.js";
import Motorcycle from "./Motorcycle.js";

const data = {
    cars : [
        {   
        brand: "ferrari",
        speed: 200,
        },

        {
        brand: "fiat",
        speed: 200,
        },
    ],


    motorcycles : [
        {   
        brand: "buggati",
        speed: 400,
        },

        {
        brand: "kamazaki",
        speed: 500,
        },

    ],

};

const veicules = [];

window.onload = () =>{
    console.log("window loaded");
    const nav = document.querySelector("nav");

    const createUL = (name,data) => {
        const ul = document.createElement("ul");
        const title = document.createElement("li");
        title.innerText = name;
        ul.appendChild(title);

        data.forEach((element) => {
            const li = document.createElement("li");
            const button = document.createElement("button");
            button.onclick = (event) => {
                switch (name) {
                    case "cars":
                        veicules.push(new Car(element));
                        break;
                    case "motocycles":
                        veicules.push(new Motorcycle(element));
                        break;
                
                    default:
                        break;
                }
                //console.log(veicules);
            }
            button.innerText = element.brand;
            li.appendChild(button);
            ul.appendChild(li);
            
        });

        nav.appendChild(ul);

};

for (const key in data) {
    createUL(key, data[key]);
}
}
    
/*const car = new Car();
const motorcycle = new Motorcycle();
    */

    

