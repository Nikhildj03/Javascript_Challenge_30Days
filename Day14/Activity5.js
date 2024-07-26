// Activity 5: Private Fields

// Task 9: Define a class Account with private feilds for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated throught these methods.

class Account {
  #balance;

  constructor(initialBalance = 0) {
    this.#balance = initialBalance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited: ${this.amount}. New Balance: ${this.#balance}`);
    } else {
      console.log(`Deposit amount must be positive`);
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdraw: ${amount}. New Balance: ${this.#balance}`);
    } else if (amount > this.#balance) {
      console.log(`Insufficient Balance`);
    } else {
      console.log(`Withdraw amount must be positive`);
    }
  }

  getBalance() {
    return this.#balance;
  }
}

// Task 10 : Create an instance of the Account class and test the deposit and withdraw methods, logging the balance and logs messages.

const myAccount = new Account(100); // Initial balance of 100
myAccount.deposit(50); // Deposited: 50. New Balance: 150
myAccount.withdraw(30); // Withdrew: 30. New Balance: 120
myAccount.withdraw(200); // Insufficient funds
console.log(`Final Balance: ${myAccount.getBalance()}`); // Final Balance: 120
