const server = (name, delay) => new Promise((resolve, reject) => setTimeout(() => {
  if (Math.random() < 0.1) reject(new Error(`${name} failed`));
  else resolve(`${name} responded`);
}, delay));
const a = server("Server A", 2000);
const b = server("Server B", 3000);
Promise.all([a, b]).then(() => console.log("Deployment completed for all servers"))
  .catch((error) => console.error(error.message));
Promise.race([server("Server A", 2000), server("Server B", 3000)])
  .then((response) => console.log("Fastest response:", response))
  .catch((error) => console.error(error.message));
