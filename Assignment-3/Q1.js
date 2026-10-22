"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumbers = [];
const invalidNumbers = [];

console.log("Q1 — Dynamic Data Parser");
for (let index = 0; index < apiData.length; index += 1) {
  const value = apiData[index];
  const numberValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);
  const report = `#${index + 1}: original=${stringValue}, Number=${numberValue}, Boolean=${booleanValue}, String=${stringValue}`;

  // Number() treats null as 0 and whitespace as 0. The assignment explicitly
  // rejects blank strings, and NaN is never a valid numeric result.
  const isBlank = typeof value === "string" && value.trim() === "";
  if (Number.isNaN(numberValue) || isBlank) {
    invalidNumbers.push({ index, value, numberValue, reason: isBlank ? "blank string" : "Number() returned NaN" });
    console.log(`[INVALID] ${report}`);
  } else {
    validNumbers.push({ index, value, numberValue, booleanValue, stringValue });
    console.log(`[VALID]   ${report}`);
  }
}
console.log("Valid numeric values:", validNumbers.map((entry) => entry.numberValue));
console.log("Invalid values:", invalidNumbers.map(({ index, value, reason }) => ({ line: index + 1, value, reason })));
