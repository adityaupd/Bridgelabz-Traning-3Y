const results = [];
for (let number = 1; number <= 30; number += 1) {
  const label = number % 15 === 0 ? "FizzBuzz" : number % 2 === 0 ? "Even" : "Odd";
  results.push({ number, label });
}
console.table(results);
