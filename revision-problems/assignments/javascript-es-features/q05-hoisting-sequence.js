"use strict";
const score=50;
function announce(){console.log("Game started")}
const status="ready";
function startGame(){console.log(status)}
console.log(score);announce();startGame();
// Function declarations are hoisted; let/const bindings exist but cannot be read before initialization.
const announceArrow=()=>console.log("Arrow function assigned before use");announceArrow();
