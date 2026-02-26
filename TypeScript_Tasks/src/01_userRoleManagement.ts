// Task 1: User Role Manager using Type Alias with Union Types

type Role = "admin" | "user" | "guest";

interface User {
    name: string;
    role: Role;
}

export function hasAccess(user: User): boolean {
    return user.role === "admin";
}

const u: User = { name: "Alice", role: "user" };
console.log(u.name, "access?", hasAccess(u));