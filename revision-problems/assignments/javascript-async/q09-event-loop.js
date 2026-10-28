// Predicted order: Script start, Script end, Promise callback, Timeout callback.
console.log("Script start");
setTimeout(() => console.log("Timeout callback"), 0);
Promise.resolve().then(() => console.log("Promise callback"));
console.log("Script end");
// Microtasks drain after synchronous code and before the next macrotask.
