"use strict";

const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
];

console.log("Q2 — Employee Bonus Calculator");
for (const employee of employees) {
  try {
    if (!employee || !employee.name || employee.salary === undefined || employee.years === undefined) {
      throw new Error("Missing employee name, salary, or years property");
    }
    const salary = Number(employee.salary);
    const years = Number(employee.years);
    if (!Number.isFinite(salary) || !Number.isFinite(years)) throw new TypeError("Salary and years must convert to finite numbers");
    const bonus = salary * (years > 3 ? 0.1 : 0.05);
    console.log(`${employee.name}: salary=$${salary.toFixed(2)}, years=${years}, bonus=$${bonus.toFixed(2)}, total=$${(salary + bonus).toFixed(2)}`);
  } catch (error) {
    console.log(`Employee record error: ${error.name}: ${error.message}`);
  }
}
// Strict mode rejects assignments to undeclared identifiers; all variables above are declared.
