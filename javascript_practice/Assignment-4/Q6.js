// Employee salaries, bonuses, and company annual payroll.
class Employee {
    constructor(id, name, department, salary) {
        Object.assign(this, { id, name, department, salary });
    }
    getAnnualSalary() {
        return this.salary * 12;
    }
    applyBonus(percent) {
        this.salary = Number((this.salary * (1 + percent / 100)).toFixed(2));
    }
}

const employees = [
    new Employee(1, "Asha", "Engineering", 80000),
    new Employee(2, "Ravi", "Design", 65000),
    new Employee(3, "Mina", "Sales", 72000),
    new Employee(4, "Dev", "Engineering", 90000),
    new Employee(5, "Sara", "Support", 58000)
];

employees[0].applyBonus(5);
employees.forEach(employee => console.log(`${employee.name}: annual salary $${employee.getAnnualSalary().toFixed(2)}`));
const totalAnnualPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
console.log(`Total annual payout: $${totalAnnualPayout.toFixed(2)}`);
