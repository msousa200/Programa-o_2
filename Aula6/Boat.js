
import Vehicle from "./Vehicle.js";

export default class Boat extends Vehicle {
  constructor(element) {
    super(element);
    console.log("Brand:", this.brand, "Speed:", this.speed);
  }
}