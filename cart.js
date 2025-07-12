
let cartItems = [];

function addToCart(product, price) {
  cartItems.push({ product, price });
  updateCart();
}

function updateCart() {
  const cartElement = document.getElementById("cart");
  cartElement.innerHTML = '';
  cartItems.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.product} - $${item.price.toFixed(2)}`;
    cartElement.appendChild(li);
  });
}
