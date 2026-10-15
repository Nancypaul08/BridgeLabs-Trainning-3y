// Boolean Logic Access System
const isDoorLocked = true;
const isWindowClosed = true;
const isAlarmOn = true;
const isOwnerInside = true;

function checkSecurity(doorLocked, windowClosed, alarmOn, ownerInside) {
  // OR combines all unsafe conditions; negation makes the final secure result clear.
  const isUnsafe = !doorLocked || !windowClosed || !alarmOn || !ownerInside;
  console.log(isUnsafe ? "Unsafe" : "Secure");
}

// Compare a fully secured home with one where the window is open.
checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside);
checkSecurity(isDoorLocked, false, isAlarmOn, isOwnerInside);
