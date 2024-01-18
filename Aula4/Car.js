import Veicule from "./Veicule.js";

export default class Car extends Veicule{

    constructor(){
        super();

        this.speed = 20;

        console.log("car speed", this.speed);
    }
}
