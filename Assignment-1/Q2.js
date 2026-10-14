// Multi-Type Data Summary
const userName = "Alex";
const accountBalance = 1250.75;
const isActive = true;
const favoriteColors = ["blue", "green"];
const profile = { city: "Pune", member: true };
const middleName = null;
let referralCode;

// typeof null is "object" in JavaScript, so label null explicitly.
const dataSummary = [
  { label: "User name", value: userName, type: typeof userName },
  { label: "Account balance", value: accountBalance, type: typeof accountBalance },
  { label: "Active", value: isActive, type: typeof isActive },
  { label: "Favorite colors", value: favoriteColors.join(", "), type: Array.isArray(favoriteColors) ? "array" : typeof favoriteColors },
  { label: "Profile", value: JSON.stringify(profile), type: typeof profile },
  { label: "Middle name", value: middleName, type: middleName === null ? "null" : typeof middleName },
  { label: "Referral code", value: referralCode, type: typeof referralCode },
];

console.table(dataSummary);
