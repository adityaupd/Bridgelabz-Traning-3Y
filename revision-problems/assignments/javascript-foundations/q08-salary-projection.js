let salary = 600000;
const annualIncreaseRate = 0.08;
const projection = [];

for (let year = 1; year <= 5; year += 1) {
  salary *= 1 + annualIncreaseRate;
  projection.push({ year, annualSalary: Math.round(salary) });
}
console.table(projection);
