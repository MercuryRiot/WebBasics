// Task 8: User Module: Export a Class and Import into Another File

export class User {
  constructor(public name: string, public email: string) {}

  info(): string {
    return `${this.name} <${this.email}>`;
  }
}