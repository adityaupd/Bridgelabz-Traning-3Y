const stages = ["design", "build", "test", "deploy", "celebrate"];
const pause = (stage, next) => setTimeout(() => { console.log(stage); next(); }, 1000);
// Nested callbacks show the original callback-heavy style.
pause(stages[0], () => pause(stages[1], () => pause(stages[2], () => pause(stages[3], () => pause(stages[4], () => {})))));

// async/await keeps the same ordered pipeline readable from top to bottom.
const runCleanPipeline = async () => {
  for (const stage of stages) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(`async/await: ${stage}`);
  }
};
runCleanPipeline();
