const wait = (message) => new Promise((resolve, reject) => setTimeout(() => {
  if (Math.random() < 0.1) reject(new Error(`${message} failed`));
  else { console.log(message); resolve(); }
}, 1000 + Math.random() * 1000));

wait("Water boiled").then(() => wait("Coffee brewed"))
  .then(() => wait("Coffee poured"))
  .then(() => console.log("Coffee ready for the team!"))
  .catch((error) => console.error("Coffee process failed:", error.message));
