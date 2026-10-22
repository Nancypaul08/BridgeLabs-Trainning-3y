"use strict";

console.log("Q8 — Strict Mode Showdown");
// In sloppy mode duplicate parameters are accepted and assignment creates a global.
// Function() creates a separate non-strict function body for this comparison.
const sloppyDemo = Function("a", "a", 'total = 10; console.log("sloppy duplicate parameter; total=" + total); delete globalThis.total;');
sloppyDemo(5, 10);

// In strict mode duplicate parameter names are a SyntaxError, so use a strict
// function with unique parameters to demonstrate assignment-to-undeclared failure.
try {
  eval('"use strict"; function duplicateParameters(a, a) {}');
} catch (error) {
  console.log(`strict duplicate parameters: ${error.name}: ${error.message}`);
}
function strictDemo(a, b) {
  "use strict";
  try { total = 10; } catch (error) { console.log(`strict undeclared assignment: ${error.name}`); }
  console.log(`strict parameters remain distinct: a=${a}, b=${b}`);
}
strictDemo(5, 10);
try {
  // Strict delete of an unqualified identifier is a syntax error; eval catches it
  // here so the complete lesson can still run and report it.
  eval('"use strict"; delete total;');
} catch (error) {
  console.log(`strict delete: ${error.name}: ${error.message}`);
}

// ES6-style correction: declare state explicitly, use unique parameter names,
// and do not delete a lexical binding (set it to null if clearing is intended).
function correctedDemo(first, second) {
  let total = 10;
  console.log(`corrected: first=${first}, second=${second}, total=${total}`);
  total = null;
  console.log(`cleared total=${total}`);
}
correctedDemo(5, 10);
