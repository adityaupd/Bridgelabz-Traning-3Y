function submitOrder() {
  return Math.random() < 0.5 ? Promise.resolve("Order accepted") : Promise.reject(new Error("Temporary order failure"));
}
async function processOrder() {
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const result = await submitOrder();
      console.log(`Attempt ${attempt}: Success - ${result}`);
      return;
    } catch (error) {
      console.log(`Attempt ${attempt}: Failed - ${error.message}`);
    }
  }
  throw new Error("Order could not be processed");
}
processOrder().catch((error) => console.error(error.message));
