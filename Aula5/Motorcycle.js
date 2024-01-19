import Veicule from "./Veicule.js";

export default class Motorcycle extends Veicule{
    
    constructor(data){
        super(data);
        this.speed = 50;

        console.log(this.brand, this.speed);
    }
}