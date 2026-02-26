// Task 6: Vehicle Management using Abstract Class
export class Vehicle {
    constructor(make) {
        this.make = make;
    }
}
export class Car extends Vehicle {
    move() {
        console.log(`${this.make} is for F1.`);
    }
}
export class Bike extends Vehicle {
    move() {
        console.log(`${this.make} is for MotoGP.`);
    }
}
const v1 = new Car("Mercedes");
const v2 = new Bike("KTM");
v1.move();
v2.move();
