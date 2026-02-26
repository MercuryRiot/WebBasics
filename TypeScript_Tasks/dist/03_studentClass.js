// Task 3: Student Class Creation and Object Property/Method Access
export class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        return `Hello, my name is ${this.name} and I'm ${this.age}.`;
    }
}
// example usage
const s = new Student("Arghya", 22);
console.log(s.greet());
