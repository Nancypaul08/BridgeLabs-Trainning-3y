// The returned function closes over and remembers the multiplier parameter.
function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15

// Closure: even after makeMultiplier has returned, triple retains access to
// the multiplier value (3) from the call that created it.
