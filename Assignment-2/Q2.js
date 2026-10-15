// String Manipulation Report
const productName = " wireless headphones PRO ";
const trimmedName = productName.trim().toLowerCase();
const titleCasedName = trimmedName
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");
const cleanedTitle = titleCasedName.replace("Pro", "Pro Edition");

console.log(`Cleaned title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length}`);
