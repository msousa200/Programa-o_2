import Vehicle from "./Vehicle.js";

export default class Car extends Vehicle {
  constructor(element) {
    super(element);
    console.log("Brand:", this.brand, "Speed:", this.speed);
  }
}