class Employee {
  constructor(id, name, department, salary) { Object.assign(this, { id, name, department, salary }); }
  getAnnualSalary() { return this.salary * 12; }
  applyBonus(percent) { this.salary *= 1 + percent / 100; }
}
const employees = Array.from({ length: 5 }, (_, index) => new Employee(index + 1, `Employee ${index + 1}`, ["HR", "Finance", "Tech"][index % 3], 40000 + index * 2500));
employees.forEach((employee) => employee.applyBonus(5));
console.table(employees.map((employee) => ({ name: employee.name, annualSalary: employee.getAnnualSalary() })));
console.log("Annual payroll:", employees.reduce((sum, employee) => sum + employee.getAnnualSalary(), 0));
