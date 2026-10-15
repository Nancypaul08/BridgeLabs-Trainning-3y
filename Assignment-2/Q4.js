// Array Performance Analyzer
// Generate eight integer scores from 30 through 100 (inclusive).
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
const adjustedScores = scores.map((score) => score); // map() can be used to transform each score.
const highestScore = Math.max(...adjustedScores);
const lowestScore = Math.min(...adjustedScores);
const totalScore = adjustedScores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / adjustedScores.length;
const passingScores = adjustedScores.filter((score) => score >= 50);

console.log(`Scores: ${adjustedScores.join(", ")}
Highest: ${highestScore}
Lowest: ${lowestScore}
Average: ${averageScore.toFixed(2)}
Students passed: ${passingScores.length} of ${adjustedScores.length}`);
