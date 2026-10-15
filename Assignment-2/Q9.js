// Odd–Even Number Analyzer
const classifications = [];

for (let number = 1; number <= 30; number += 1) {
  if (number % 3 === 0 && number % 5 === 0) {
    classifications.push(`${number}: FizzBuzz`);
  } else if (number % 2 === 0) {
    classifications.push(`${number}: Even`);
  } else {
    classifications.push(`${number}: Odd`);
  }
}

console.log(classifications);
