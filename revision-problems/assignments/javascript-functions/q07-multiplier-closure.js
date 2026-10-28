function makeMultiplier(multiplier) {
  return (number) => number * multiplier; // The returned closure retains multiplier.
}
const triple = makeMultiplier(3);
console.log(triple(5)); // 15
