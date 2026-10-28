const timed = (name, delay, shouldFail = false) => new Promise((resolve, reject) => setTimeout(() => {
  shouldFail ? reject(new Error(`${name} failed`)) : resolve(`${name} loaded`);
}, delay));
const startedAt = Date.now();
Promise.allSettled([timed("Profile", 2000), timed("Posts", 1500, Math.random() < 0.5), timed("Messages", 1000)])
  .then((results) => {
    console.table(results.map((result, index) => ({ module: ["Profile", "Posts", "Messages"][index], status: result.status, message: result.status === "fulfilled" ? result.value : result.reason.message })));
    console.log(`Elapsed: ${Date.now() - startedAt} ms`);
  });
