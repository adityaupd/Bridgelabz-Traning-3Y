class Product {
  constructor(id, name, price, category) { Object.assign(this, { id, name, price, category }); }
  applyDiscount(percent) { this.price *= 1 - percent / 100; }
  details() { return `${this.name} (${this.category}) - $${this.price.toFixed(2)}`; }
}
const products = [new Product(1, "Keyboard", 1200, "Accessories"), new Product(2, "Mouse", 800, "Accessories")];
products[0].applyDiscount(10);
products.filter((product) => product.price > 1000).forEach((product) => console.log(product.details()));
