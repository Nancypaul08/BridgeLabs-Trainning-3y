"use strict";

const rawData = ['{"user":"Alex","age":25}', '{"id":2}', '{invalid}', '{"user":"Mina","age":"22"}'];
const clean = [];
const under18 = [];
const errors = [];

console.log("Q9 — JSON Audit");
rawData.forEach((line, index) => {
  try {
    const parsed = JSON.parse(line);
    if (!Object.hasOwn(parsed, "user") || !Object.hasOwn(parsed, "age")) {
      throw new Error("Missing required key (user or age)");
    }
    const age = Number(parsed.age);
    if (!Number.isFinite(age)) throw new Error("Age is not a valid number");
    const entry = { ...parsed, age };
    clean.push(entry);
    if (age < 18) under18.push(entry);
    console.log(`Line ${index + 1}: parsed successfully (${entry.user}, age ${age})`);
  } catch (error) {
    errors.push({ line: index + 1, message: error.message });
    console.log(`Line ${index + 1}: ERROR ${error.message}`);
    // A breakpoint here shows the catch path; malformed JSON skips directly from
    // JSON.parse to catch, while missing keys throw after parsing.
  }
});
console.log("Clean entries:", clean);
console.log("Under-18 entries:", under18);
console.log("Audit errors:", errors);
