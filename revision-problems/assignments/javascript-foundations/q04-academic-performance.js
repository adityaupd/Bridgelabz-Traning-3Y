const marks = [88, 76, 92, 81, 79];
if (marks.length !== 5 || marks.some((mark) => !Number.isFinite(mark) || mark < 0 || mark > 100)) {
  throw new Error("Enter exactly five marks from 0 to 100.");
}
const average = marks.reduce((sum, mark) => sum + mark, 0) / marks.length;
const result = marks.some((mark) => mark < 35)
  ? "Detained"
  : average >= 85 ? "Promoted with Distinction" : average >= 50 ? "Promoted" : "Detained";
console.log({ average: average.toFixed(2), percentage: `${average.toFixed(2)}%`, result });
