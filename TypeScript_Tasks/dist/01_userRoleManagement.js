// Task 1: User Role Manager using Type Alias with Union Types
export function hasAccess(user) {
    return user.role === "admin";
}
const u = { name: "Alice", role: "user" };
console.log(u.name, "access?", hasAccess(u));
