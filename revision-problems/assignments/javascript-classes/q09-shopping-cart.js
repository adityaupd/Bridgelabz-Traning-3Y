class Cart {
  constructor() { this.items = []; }
  addItem(name, price, quantity = 1) { this.items.push({ name, price, quantity }); }
  getTotal() { return this.items.reduce((sum, item) => sum + item.price * item.quantity, 0); }
  applyCoupon(code) { const match = /^(SAVE|DISC)(10|20)$/.exec(code); return match ? this.getTotal() * (1 - Number(match[2]) / 100) : null; }
}
const cart = new Cart(); cart.addItem("Notebook", 120, 2); cart.addItem("Pen set", 80);
const coupon = "SAVE20", discountedTotal = cart.applyCoupon(coupon);
console.log({ subtotal: cart.getTotal(), couponValid: discountedTotal !== null, finalTotal: discountedTotal ?? cart.getTotal() });
