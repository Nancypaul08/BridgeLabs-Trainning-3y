"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
  constructor(operation) { super(`Unknown operation: ${operation}`); this.name = "InvalidOperationError"; }
}
class MathOperationError extends Error {
  constructor(message) { super(message); this.name = "MathOperationError"; }
}

console.log("Q7 — Smart Calculator");
for (const operation of operations) {
  try {
    let result;
    switch (operation) {
      case "add": result = num1 + num2; break;
      case "divide": if (num2 === 0) throw new MathOperationError("Cannot divide by zero"); result = num1 / num2; break;
      case "power": result = num1 ** num2; break;
      case "root": if (num1 < 0) throw new MathOperationError("Cannot take the square root of a negative number"); result = Math.sqrt(num1); break;
      case "subtract": result = num1 - num2; break;
      default: throw new InvalidOperationError(operation);
    }
    console.log(`${operation.padEnd(8)} | ${num1} and ${num2} => ${result}`);
  } catch (error) {
    console.log(`${operation.padEnd(8)} | ERROR ${error.name}: ${error.message}`);
  }
}
// The supplied operations list only contains supported names; the default branch
// still handles an unrecognized name if one is added to the list.
