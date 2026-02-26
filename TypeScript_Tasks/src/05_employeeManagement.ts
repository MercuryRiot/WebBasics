// Task 5: Employee Management using Inheritance

export class Employee {
  constructor(public name: string, public salary: number) {}

  describe(): string {
    return `${this.name} earns ${this.salary}`;
  }
}

export class Manager extends Employee {
  constructor(name: string, salary: number, public department: string) {
    super(name, salary);
  }

  describe(): string {
    return `${super.describe()} and manages ${this.department}.`;
  }
}

const emp = new Employee("Charlie", 30000);
const mgr = new Manager("Dana", 50000, "sales");
console.log(emp.describe());
console.log(mgr.describe());