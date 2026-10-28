const left = Math.floor(Math.random() * 20) + 1;
const right = Math.floor(Math.random() * 20) + 1;
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];
let answer;

switch (operator) {
  case "+": answer = left + right; break;
  case "-": answer = left - right; break;
  case "*": answer = left * right; break;
  case "/": answer = left / right; break;
  default: throw new Error("Unknown operator");
}
console.log(`${left} ${operator} ${right} = ${operator === "/" ? answer.toFixed(2) : answer}`);
