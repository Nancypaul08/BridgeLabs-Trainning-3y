"use strict";

const requestedLimit = Number(process.argv[2] ?? 5);
const rowLimit = Number.isInteger(requestedLimit) && requestedLimit > 0 ? requestedLimit : 5;
console.log(`Q6 — Pyramid Pattern Generator (rows: ${rowLimit})`);
for (let row = 1; row <= rowLimit; row += 1) {
  let line = "";
  for (let column = 1; column <= row; column += 1) line += "* ";
  console.log(line.trimEnd());
}

// Compare by changing `let` to `var`: this output remains the same because each
// iteration prints immediately. But `var` is function-scoped and reuses one
// binding; closures created in the loop would observe the final counter value.
// A breakpoint on the inner loop lets you watch row, column, and line change.
// Try `node Q6.js 7` to provide a row limit; invalid/non-positive input defaults to 5.
