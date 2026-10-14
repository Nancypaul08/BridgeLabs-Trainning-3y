// Monthly Expense Tracker
const expenses = {
  food: 450,
  travel: 180,
  rent: 1200,
  bills: 220,
  leisure: 150,
};

let totalExpenses = 0;
for (const expense of Object.values(expenses)) {
  totalExpenses += expense;
}
const averageExpense = totalExpenses / Object.keys(expenses).length;
const taxRate = 0.10;
totalExpenses += totalExpenses * taxRate;

console.log(`Total expenses: $${(totalExpenses / (1 + taxRate)).toFixed(2)}`);
console.log(`Average expense: $${averageExpense.toFixed(2)}`);
console.log(`Final amount after 10% tax: $${totalExpenses.toFixed(2)}`);
