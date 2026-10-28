let count = 0;
function updateCounter(direction) {
  const change = () => { count += direction; };
  change(); // Nested function updates the outer function scope's count.
  console.log(`Count: ${count}`);
}
const increment = () => updateCounter(1);
const decrement = () => updateCounter(-1);
increment(); increment(); decrement();
