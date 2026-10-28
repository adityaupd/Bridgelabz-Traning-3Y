"use strict";
function outer(){var count=5;console.log("outer:",count);function inner(){var count=10;console.log("inner:",count)}inner()}
outer();
// The two `var count` declarations belong to separate function execution contexts.
