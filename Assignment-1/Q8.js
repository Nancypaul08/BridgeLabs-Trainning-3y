// Employee Salary Projection
let currentSalary = 50000;
const annualIncrementRate = 8; // percent
const salaryProjection = [];

for (let year = 1; year <= 5; year += 1) {
  currentSalary *= 1 + annualIncrementRate / 100;
  currentSalary = Math.round(currentSalary * 100) / 100;
  salaryProjection.push({ year, salary: `$${currentSalary.toFixed(2)}` });
}

console.table(salaryProjection);
