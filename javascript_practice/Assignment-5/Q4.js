// Constructor function for creating Car instances.
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// One shared function lives on Car.prototype instead of each car instance.
Car.prototype.getDetails = function () {
    return `${this.brand} ${this.model}`;
};

const firstCar = new Car("Toyota", "Corolla");
const secondCar = new Car("Honda", "Civic");
console.log(firstCar.getDetails());
console.log(secondCar.getDetails());
console.log("Method shared:", firstCar.getDetails === secondCar.getDetails);
