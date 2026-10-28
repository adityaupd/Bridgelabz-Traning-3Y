const expenses = [
  { category: "Food", amount: 5200 },
  { category: "Travel", amount: 1800 },
  { category: "Rent", amount: 12000 },
  { category: "Bills", amount: 2400 },
  { category: "Leisure", amount: 1600 },
];
const total = expenses.reduce((sum, item) => sum + item.amount, 0);
const average = total / expenses.length;
const taxedTotal = total * 1.10;

console.table({ total: total.toFixed(2), average: average.toFixed(2), afterTax: taxedTotal.toFixed(2) });
