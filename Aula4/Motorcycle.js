import Veicule from "./Veicule.js";

export default class Motorcycle extends Veicule{
    
    constructor(){
        super();
        this.speed = 50;

        console.log("motorcycle speed", this.speed);
    }
}