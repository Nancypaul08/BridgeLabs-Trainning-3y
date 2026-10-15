// Scope Conflict Resolver
const bonus = 5000; // Global bonus shared by salary calculations.

function calculateSalary(isPermanent) {
  const salary = 40000; // Local to this function.
  let totalSalary = salary;

  // Add the global bonus only when this call's local parameter is true.
  if (isPermanent === true) {
    totalSalary += bonus;
  }

  console.log(`Permanent: ${isPermanent}; total salary: $${totalSalary}`);
  return totalSalary;
}

calculateSalary(true);
calculateSalary(false);
console.log(`Global bonus remains unchanged: $${bonus}`);
