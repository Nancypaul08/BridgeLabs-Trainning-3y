"use strict";

console.log("Q5 — Hoisting Lab: The Sequence Trap");
// Original prediction: `score` is hoisted and initialized to undefined, so the
// first log prints undefined. Function declarations are initialized, so announce
// runs. `status` is in its temporal dead zone until its declaration executes;
// calling startGame before that point would throw ReferenceError.

const score = 50;
const status = "ready";
function announce() { console.log("Game started"); }
function startGame() { console.log(status); }
console.log(score);
announce();
startGame();

// Arrow functions are expressions: their const bindings are not callable before
// initialization (and are in the temporal dead zone).
const announceWithArrow = () => console.log("Arrow announcement");
announceWithArrow();
// Uncommenting a call to announceWithArrow above its declaration causes ReferenceError.
