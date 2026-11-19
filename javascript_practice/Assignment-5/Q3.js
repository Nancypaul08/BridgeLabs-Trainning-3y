// An arrow function keeps the `this` value from the surrounding scope.
// In Node.js this is the module scope, which has no `name` property.
const arrowUser = {
    name: "Jordan",
    showName: () => console.log("Arrow function this.name:", this.name)
};
arrowUser.showName(); // undefined

// A normal method gets `this` from the object used to call it.
const regularUser = {
    name: "Jordan",
    showName() {
        console.log("Normal method this.name:", this.name);
    }
};
regularUser.showName(); // Jordan
