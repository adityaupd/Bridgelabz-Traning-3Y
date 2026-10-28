async function loadProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    const products = await response.json();
    console.table(products.map(({ title, price, image }) => ({ title, price: `$${price}`, image })));
  } catch (error) {
    console.error("Failed to load products. Please try again.", error);
  }
}
loadProducts();
