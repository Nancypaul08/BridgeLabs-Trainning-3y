// Student inherits Person's name property and prototype method.
function Person(name) {
    this.name = name;
}
Person.prototype.printName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name); // Initialize inherited instance property.
    this.branch = branch;
}
Student.prototype = Object.create(Person.prototype); // Link the prototypes.
Student.prototype.constructor = Student;
Student.prototype.printBranch = function () {
    console.log(`Branch: ${this.branch}`);
};
Student.prototype.printDetails = function () {
    this.printName();
    this.printBranch();
};

const student = new Student("Priya", "Computer Science");
student.printDetails();
console.log("Person method inherited:", student.printName === Person.prototype.printName);
console.log("Prototype chain reaches Person:", Person.prototype.isPrototypeOf(student));
