/* classs evcar */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  // Override cloneCar to return an instance of Car
  cloneCar() {
    const newCar = new Car();
    newCar._brand = this._brand;
    newCar._motor = this._motor;
    newCar._color = this._color;
    return newCar;
  }
}
