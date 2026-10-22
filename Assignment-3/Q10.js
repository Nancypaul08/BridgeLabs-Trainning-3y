"use strict";

console.log("Q10 — Nested Hoisting and Closures");
function outer() {
  // `count` is hoisted within outer's own activation and starts undefined.
  console.log("outer before assignment:", count);
  var count = 5;
  function inner() {
    // This var is a different binding in inner's activation, also initially undefined.
    // Its local name shadows outer's count, so this prints undefined, then 10.
    console.log("inner before assignment:", count);
    var count = 10;
    console.log("inner after assignment:", count);
  }
  inner();
  console.log("outer after inner:", count);
}
outer();

function outerWithArrow() {
  const count = 5;
  const inner = () => {
    // Arrow functions do not create their own `this`/`arguments`; ordinary lexical
    // name lookup also finds the outer count when no inner binding shadows it.
    console.log("arrow reads outer count:", count);
  };
  inner();
}
outerWithArrow();
// Set breakpoints at outer(), inner(), and each log. Call stack progresses
// global -> outer -> inner -> outer -> global; inspect each function's scope pane.
