// Student result processing with reduce() and a class.
class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        if (this.marks.length === 0) {
            throw new Error("Marks cannot be empty.");
        }
        const total = this.marks.reduce((sum, mark) => sum + mark, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const average = this.calculateAverage();
        if (average >= 90) return "A";
        if (average >= 80) return "B";
        if (average >= 70) return "C";
        return "F";
    }
}

function print(...values) {
    console.log(...values);
    const output = document.querySelector("#output");
    if (output) output.textContent += `${values.join(" ")}\n`;
}

const students = [
    new Student("Ava", [92, 88, 95]),
    new Student("Ben", [82, 79, 85]),
    new Student("Chloe", [68, 72, 65])
];
students.forEach(student => {
    print(`${student.name}: average ${student.calculateAverage().toFixed(2)}, grade ${student.getGrade()}`);
});
