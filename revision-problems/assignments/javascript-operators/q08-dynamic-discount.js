const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 },
];
const subtotal = cart.reduce((sum, product) => sum + product.price, 0);
const discountedItems = cart.map((product) => ({
  ...product,
  priceAfterDiscount: product.price * (1 - (product.category === "electronics" ? 0.10 : product.category === "fashion" ? 0.05 : 0)),
}));
const itemTotal = discountedItems.reduce((sum, product) => sum + product.priceAfterDiscount, 0);
const finalTotal = itemTotal * (subtotal > 50000 ? 0.95 : 1);
console.table(discountedItems);
console.log({ subtotal, finalTotal: finalTotal.toFixed(2) });
