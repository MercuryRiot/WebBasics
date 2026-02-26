// Task 5: Employee Management using Inheritance
export class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    describe() {
        return `${this.name} earns ${this.salary}`;
    }
}
export class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
    }
    describe() {
        return `${super.describe()} and manages ${this.department}.`;
    }
}
const emp = new Employee("Charlie", 30000);
const mgr = new Manager("Dana", 50000, "sales");
console.log(emp.describe());
console.log(mgr.describe());
