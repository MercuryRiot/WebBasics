// Task 7: Shape Area Calculator using Abstract Method Implementation

export abstract class Shape {
  abstract area(): number;
}

export class Rectangle extends Shape {
  constructor(public width: number, public height: number) {
    super();
  }
  area(): number {
    return this.width * this.height;
  }
}

export class Circle extends Shape {
  constructor(public radius: number) {
    super();
  }
  area(): number {
    return Math.PI * this.radius * this.radius;
  }
}

const rect = new Rectangle(4, 5);
const circle = new Circle(3);
console.log("Area of rectangle is", rect.area().toFixed(2),".");
console.log("Area of circle is", circle.area().toFixed(2),".");
