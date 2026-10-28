const age = 22;
const isCitizen = true;
let outcome;

if (isCitizen && age >= 21) outcome = "Eligible for all services.";
else if (isCitizen && age >= 18) outcome = "Eligible to vote only.";
else if (!isCitizen && age >= 18) outcome = "Only age criteria met.";
else outcome = "Not eligible yet.";

console.log(outcome);
