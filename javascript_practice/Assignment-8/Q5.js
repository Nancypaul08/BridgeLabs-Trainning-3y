// Ride-sharing users, drivers, and trips.
class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle, plate) {
        super(name, rating);
        this.vehicle = vehicle;
        this.plate = plate;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance === undefined || this.distance === null || this.distance === "") {
            throw new Error("Trip distance is required.");
        }
        if (!Number.isFinite(this.distance) || this.distance < 0) {
            throw new Error("Trip distance must be a non-negative number.");
        }
        const baseFare = 3;
        const farePerKilometer = 2.5;
        return baseFare + this.distance * farePerKilometer;
    }
}

function print(...values) {
    console.log(...values);
    const output = document.querySelector("#output");
    if (output) output.textContent += `${values.join(" ")}\n`;
}

const driver = new Driver("Jordan", 4.9, "Hybrid sedan", "ABC-123");
print(`Driver: ${driver.name}, ${driver.vehicle}, rating ${driver.rating}`);

try {
    const trip = new Trip("Airport", "Downtown", 12);
    print(`Trip fare: $${trip.calculateFare().toFixed(2)}`);
} catch (error) {
    print(`Unable to calculate fare: ${error.message}`);
}

try {
    new Trip("Home", "Station", -4).calculateFare();
} catch (error) {
    print(`Unable to calculate fare: ${error.message}`);
}
