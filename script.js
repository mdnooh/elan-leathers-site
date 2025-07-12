// JS ready for cart/UX logic
let cart = [];

function addToCart(product, price) {
  cart.push({ product, price });
  renderCart();
}

function renderCart() {
  const list = document.getElementById("cart-list");
  const totalSpan = document.getElementById("cart-total");
  list.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - ₹${item.price}`;
    list.appendChild(li);
    total += item.price;
  });
  totalSpan.textContent = total;
}
