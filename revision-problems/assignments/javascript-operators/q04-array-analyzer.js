const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
const average = scores.reduce((sum, score) => sum + score, 0) / scores.length;
console.log({ scores, highest: Math.max(...scores), lowest: Math.min(...scores), average: average.toFixed(2), passed: scores.filter((score) => score >= 50).length });
