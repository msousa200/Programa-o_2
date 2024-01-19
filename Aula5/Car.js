import Veicule from "./Veicule.js";

export default class Car extends Veicule{

    constructor(data){
        super(data);

        this.speed = 20;

        console.log("car speed", this.speed);
    }
}