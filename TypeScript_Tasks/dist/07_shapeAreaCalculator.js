// Task 7: Shape Area Calculator using Abstract Method Implementation
export class Shape {
}
export class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
export class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
const rect = new Rectangle(4, 5);
const circle = new Circle(3);
console.log("Area of rectangle is", rect.area().toFixed(2), ".");
console.log("Area of circle is", circle.area().toFixed(2), ".");
