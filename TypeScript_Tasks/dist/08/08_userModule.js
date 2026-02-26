// Task 8: User Module: Export a Class and Import into Another File
export class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    info() {
        return `${this.name} <${this.email}>`;
    }
}
