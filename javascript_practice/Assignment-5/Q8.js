// Add a map-like method without making it enumerable on arrays.
Object.defineProperty(Array.prototype, "myMap", {
    configurable: true,
    writable: true,
    enumerable: false,
    value: function (callback, thisArg) {
        if (this == null) throw new TypeError("myMap called on null or undefined");
        if (typeof callback !== "function") throw new TypeError("callback must be a function");

        const source = Object(this);
        const length = source.length >>> 0;
        const result = new Array(length);
        for (let index = 0; index < length; index += 1) {
            // Like built-in map, preserve empty slots in sparse arrays.
            if (index in source) {
                result[index] = callback.call(thisArg, source[index], index, source);
            }
        }
        return result;
    }
});

console.log([1, 2, 3].myMap(number => number * 2));
