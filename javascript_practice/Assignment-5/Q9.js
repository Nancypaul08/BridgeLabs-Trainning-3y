// ES6 class version of the Person -> Student prototype inheritance example.
class Person {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // Set up the inherited name property.
        this.branch = branch;
    }
    printBranch() {
        console.log(`Branch: ${this.branch}`);
    }
    printDetails() {
        this.printName();
        this.printBranch();
    }
}

const classStudent = new Student("Priya", "Computer Science");
classStudent.printDetails();
console.log("Person method inherited:", classStudent.printName === Person.prototype.printName);
console.log("Prototype chain reaches Person:", Person.prototype.isPrototypeOf(classStudent));

// These outputs and prototype relationships match the constructor version in Q5.js.
