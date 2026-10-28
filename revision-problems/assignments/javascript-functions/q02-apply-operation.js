function applyOperation(numbers, operation) { return numbers.map(operation); }
const values = [1, 2, 3, 4];
console.log("Doubled:", applyOperation(values, (number) => number * 2));
console.log("Squared:", applyOperation(values, (number) => number ** 2));
