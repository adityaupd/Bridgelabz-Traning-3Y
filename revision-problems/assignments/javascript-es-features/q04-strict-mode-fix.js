"use strict";
function showMessage(){const greeting="Welcome";console.log(greeting)}
showMessage();
// In strict mode, assigning to an undeclared identifier throws ReferenceError.
// A debugger can watch `greeting` inside showMessage and inspect its call frame.
