"use strict";

const transactions = [{ id: 1, amount: 2000 }, { id: 2, amount: -500 }, { id: 3 }, null];
const valid = [];
const invalid = [];

class TransactionValidationError extends Error {
  constructor(category, message) { super(message); this.name = "TransactionValidationError"; this.category = category; }
}

console.log("Q3 — Transaction Validator");
transactions.forEach((transaction, index) => {
  try {
    if (transaction === null) throw new TransactionValidationError("null", "Null transaction entry");
    if (transaction.id === undefined || transaction.amount === undefined) {
      throw new TransactionValidationError("missing", "Transaction is missing id or amount");
    }
    if (transaction.amount < 0) throw new TransactionValidationError("negative", "Transaction amount cannot be negative");
    valid.push(transaction);
    console.log(`Transaction ${transaction.id} is valid ($${transaction.amount})`);
  } catch (error) {
    invalid.push({ index, error: error.message, category: error.category || "unexpected" });
    console.log(`Transaction #${index + 1} rejected [${error.category || error.name}]: ${error.message}`);
    // Set a VS Code breakpoint on this line; inspect transaction, index, error, and both arrays.
  }
});
console.log(`Successful: ${valid.length}; failed: ${invalid.length}`);
console.log("Valid transactions:", valid);
console.log("Invalid transactions:", invalid);
