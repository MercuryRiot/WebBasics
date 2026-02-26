// Task 2: Payment System using Interface with Union Types
export function processPayment(p) {
    if (p.amount <= 0) {
        return "failed";
    }
    return "completed";
}
const pay = { amount: 0, method: "card" };
console.log("payment status", processPayment(pay));
