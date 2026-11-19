console.log("Start");

// setTimeout schedules a macrotask; Promise.then schedules a microtask.
setTimeout(() => console.log("Timeout callback (macrotask)"), 0);
Promise.resolve().then(() => console.log("Promise callback (microtask)"));

console.log("Synchronous log");
console.log("End");

// The current synchronous script finishes first. Then the event loop drains
// queued microtasks before it starts the next macrotask (the timeout callback).
