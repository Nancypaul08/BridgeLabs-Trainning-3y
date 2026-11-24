// Bank account with an encapsulated private balance field.
class BankAccount {
    #balance;

    constructor(initialBalance = 0) {
        if (!Number.isFinite(initialBalance) || initialBalance < 0) {
            throw new Error("Initial balance must be a non-negative number.");
        }
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Deposit amount must be a positive number.");
        }
        this.#balance += amount;
        return this.#balance;
    }

    withdraw(amount) {
        if (!Number.isFinite(amount) || amount <= 0) {
            throw new Error("Withdrawal amount must be a positive number.");
        }
        if (amount > this.#balance) {
            throw new Error("Insufficient balance for this withdrawal.");
        }
        this.#balance -= amount;
        return this.#balance;
    }

    getBalance() {
        return this.#balance;
    }
}

function print(...values) {
    console.log(...values);
    const output = document.querySelector("#output");
    if (output) output.textContent += `${values.join(" ")}\n`;
}

const account = new BankAccount();
print(`Deposited $${account.deposit(500).toFixed(2)}; balance is $${account.getBalance().toFixed(2)}.`);
print(`Deposited $${account.deposit(125).toFixed(2)}; balance is $${account.getBalance().toFixed(2)}.`);
try {
    account.withdraw(1000);
} catch (error) {
    print(`Withdrawal failed: ${error.message}`);
}
print(`Final balance: $${account.getBalance().toFixed(2)}.`);
