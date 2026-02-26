// Task 3: Student Class Creation and Object Property/Method Access

export class Student {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): string {
    return `Hello, my name is ${this.name} and I'm ${this.age}.`;
  }
}

// example usage
const s = new Student("Arghya", 22);
console.log(s.greet());
