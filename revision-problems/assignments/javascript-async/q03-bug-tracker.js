function getBugs() {
  return new Promise((resolve, reject) => setTimeout(() => {
    const failed = Math.random() < 0.3;
    if (failed) reject(new Error("Bug API unavailable"));
    else resolve(["UI glitch", "API timeout", "Login failure"]);
  }, 500));
}
getBugs().then((bugs) => console.table(bugs.map((description) => ({ description }))))
  .catch((error) => console.error(error.message));
