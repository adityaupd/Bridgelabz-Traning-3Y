"use strict";
function demo(first,second){return first+second}
console.log("Strict-mode-safe result:",demo(5,10));
// Strict mode rejects duplicate parameters, undeclared assignment, and deleting a variable binding.
