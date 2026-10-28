const deliveryStep = (message) => new Promise((resolve, reject) => setTimeout(() => {
  if (Math.random() < 0.08) reject(new Error(`${message} failed`));
  else { console.log(message); resolve(); }
}, 1000 + Math.random() * 1000));

async function runPipeline() {
  console.log("Start Pipeline");
  const steps = ["Step 1: Order taken", "Step 2: Food prepared", "Step 3: Package ready", "Step 4: Out for delivery", "Delivery completed!"];
  try { for (const step of steps) await deliveryStep(step); }
  catch (error) { console.error("Pipeline failed!", error.message); }
}
runPipeline();
