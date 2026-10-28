const bonus = 5000;
function calculateSalary(isPermanent) {
  const salary = 40000;
  const total = salary + (isPermanent ? bonus : 0);
  console.log({ isPermanent, salary, bonus, total });
}
calculateSalary(true);
calculateSalary(false);
console.log("Global bonus is unchanged:", bonus);
