"use strict";
const requestedRows=5;
for(let row=1;row<=requestedRows;row+=1)console.log("* ".repeat(row).trimEnd());
// With var in a loop, the same function-scoped binding is reused. Strict mode catches undeclared names.
