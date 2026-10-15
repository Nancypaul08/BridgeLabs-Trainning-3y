// Departmental Employee Evaluator
const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63],
];

for (const [departmentName, performanceScore] of departments) {
  let evaluation;
  if (performanceScore >= 90) {
    evaluation = "Excellent";
  } else if (performanceScore >= 75) {
    evaluation = "Good";
  } else if (performanceScore >= 60) {
    evaluation = "Average";
  } else {
    evaluation = "Needs Improvement";
  }
  console.log(`${departmentName}: ${performanceScore} — ${evaluation}`);
}
