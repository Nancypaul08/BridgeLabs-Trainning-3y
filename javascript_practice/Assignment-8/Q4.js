// Employee inheritance and runtime polymorphism.
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        return `${this.name} is completing tasks in ${this.department}.`;
    }
}

class Manager extends Employee {
    work() {
        return `${this.name} is coordinating the ${this.department} team.`;
    }
}

function print(...values) {
    console.log(...values);
    const output = document.querySelector("#output");
    if (output) output.textContent += `${values.join(" ")}\n`;
}

const team = [
    new Employee("Maya", "Engineering"),
    new Manager("Noah", "Sales")
];
team.forEach(person => print(person.work()));
print("The same work() call uses the implementation for each object's runtime class.");
