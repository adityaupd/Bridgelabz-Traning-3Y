const purchaseTotal = 6800;
const discountRate = purchaseTotal >= 10000 ? 0.25 : purchaseTotal >= 5000 ? 0.15 : purchaseTotal >= 2000 ? 0.05 : 0;
const finalPrice = Math.round(purchaseTotal * (1 - discountRate));

console.log({ originalTotal: purchaseTotal, discount: `${discountRate * 100}%`, finalPrice });
