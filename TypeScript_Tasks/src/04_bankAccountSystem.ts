// Task 4: Bank Account System using Access Modifiers (public, private, protected)

export class BankAccount {
  public balance: number;
  private accountNumber: string;
  protected pin: number;

  constructor(accountNumber: string, pin: number) {
    this.accountNumber = accountNumber;
    this.pin = pin;
    this.balance = 0;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
    }
  }

  public withdraw(amount: number, pin: number): boolean {
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
