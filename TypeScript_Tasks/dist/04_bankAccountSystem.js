// Task 4: Bank Account System using Access Modifiers (public, private, protected)
export class BankAccount {
    constructor(accountNumber, pin) {
        this.accountNumber = accountNumber;
        this.pin = pin;
        this.balance = 0;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
        }
    }
    withdraw(amount, pin) {
        if (pin === this.pin && amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}
const acct = new BankAccount("1234", 4321);
acct.deposit(1500);
console.log("Balance:", acct.balance);
console.log("Withdraw possible:", acct.withdraw(100, 4321));
console.log("Final balance:", acct.balance);
