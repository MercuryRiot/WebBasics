// Task 2: Payment System using Interface with Union Types

interface Payment {
    amount: number;
    method: "card" | "cash" | "upi";
}

type PaymentStatus = "pending" | "completed" | "failed";

export function processPayment(p: Payment): PaymentStatus {
    if (p.amount <= 0) {
    return "failed";
  }
  return "completed";
}

const pay: Payment = { amount: 0, method: "card" };
console.log("payment status", processPayment(pay));
