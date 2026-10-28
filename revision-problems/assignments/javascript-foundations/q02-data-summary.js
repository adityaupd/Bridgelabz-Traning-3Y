// Array.isArray() distinguishes arrays from ordinary objects.
const values = {
  name: "Aditya",
  age: 21,
  isStudent: true,
  subjects: ["HTML", "CSS", "JavaScript"],
  profile: { city: "Mathura" },
  middleName: null,
  nickname: undefined,
};
const entries = Object.entries(values).map(([label, value]) => ({
  label,
  value: String(value),
  type: Array.isArray(value) ? "array" : value === null ? "null" : typeof value,
}));

console.table(entries);
