// Event-Based Counter Simulation
let count = 0;

function logCount() {
  // This nested function closes over and reads count from the outer scope.
  console.log(`Current count: ${count}`);
}

function increment() {
  count += 1;
  logCount();
}

function decrement() {
  count -= 1;
  logCount();
}

// Simulate clicks by calling the event functions.
increment();
increment();
decrement();
