// Smart Guessing Game (secret number is generated randomly)
const secretNumber = Math.floor(Math.random() * 50) + 1;
const userGuess = 27; // Change this test value to try another guess.

if (userGuess === secretNumber) {
  console.log("Correct guess!");
} else {
  const isVeryClose = Math.abs(userGuess - secretNumber) <= 3;
  if (isVeryClose && userGuess >= 1 && userGuess <= 50) {
    console.log("Very close!");
  } else if (userGuess > secretNumber) {
    console.log("Too high");
  } else {
    console.log("Too low");
  }
}
console.log(`Secret number (for this exercise): ${secretNumber}`);
