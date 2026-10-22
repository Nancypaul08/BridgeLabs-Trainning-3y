"use strict";

// Original bug: greeting = "Welcome"; assigns to an undeclared identifier.
// In strict mode this throws ReferenceError instead of creating a global property.
function showMessage() {
  const greeting = "Welcome";
  console.log(greeting);
  // Add greeting to VS Code's Watch panel and set a breakpoint on the log line.
}

console.log("Q4 — Debugging Mystery");
showMessage();
// The const declaration gives greeting function-block scope; the fixed function
// reads the declared binding rather than relying on accidental global creation.
