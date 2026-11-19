console.log("Script start");
// Predicted output order:
// Script start
// Script end
// Promise callback
// Timeout callback
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");

// Actual output matches the prediction: after synchronous code, JavaScript
// drains the microtask queue (Promise.then) before processing timer macrotasks.
