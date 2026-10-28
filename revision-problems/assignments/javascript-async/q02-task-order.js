console.log("Start");
setTimeout(() => console.log("Macrotask: timeout callback"), 0);
Promise.resolve().then(() => console.log("Microtask: promise callback"));
console.log("Synchronous log");
console.log("End");
// The promise reaction runs after the current stack and before the timer task.
