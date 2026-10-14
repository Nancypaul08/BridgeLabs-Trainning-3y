// Academic Performance Evaluator (marks are out of 100)
const subjectMarks = [88, 91, 79, 84, 93];
const totalMarks = subjectMarks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / subjectMarks.length;
const percentage = (totalMarks / (subjectMarks.length * 100)) * 100;
const hasFailingSubject = subjectMarks.some((mark) => mark < 35);

let result;
if (hasFailingSubject || percentage < 50) {
  result = "Detained";
} else if (percentage >= 85) {
  result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
  result = "Promoted";
} else {
  result = "Detained";
}

console.log(`Average: ${average.toFixed(2)}`);
console.log(`Overall percentage: ${percentage.toFixed(2)}%`);
console.log(result);
