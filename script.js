let cart = [];


// ADD TO CART
function addToCart(name, price) {

  const existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1
    });
  }

  updateCart();

  // Small confirmation
  alert(name + " added to cart!");
}


// UPDATE CART
function updateCart() {

  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  const cartTotal = document.getElementById("cart-total");

  cartItems.innerHTML = "";

  let total = 0;
  let count = 0;

  if (cart.length === 0) {

    cartItems.innerHTML =
      '<p class="empty-cart">Your cart is empty.</p>';

  } else {

    cart.forEach((item, index) => {

      total += item.price * item.quantity;
      count += item.quantity;

      const div = document.createElement("div");

      div.className = "cart-item";

      div.innerHTML = `
        <div>
          <strong>${item.name}</strong>
          <br>
          <small>
            ₹${item.price} × ${item.quantity}
          </small>
        </div>

        <button
          onclick="removeFromCart(${index})"
          style="
            background:none;
            border:none;
            color:#ff6b6b;
            cursor:pointer;
            font-size:14px;
          "
        >
          Remove
        </button>
      `;

      cartItems.appendChild(div);

    });
  }

  cartCount.textContent = count;
  cartTotal.textContent = total;
}


// REMOVE FROM CART
function removeFromCart(index) {

  cart.splice(index, 1);

  updateCart();
}


// OPEN CART
function openCart() {

  const overlay = document.getElementById("cart-overlay");

  overlay.style.display = "flex";

  updateCart();
}


// CLOSE CART
function closeCart() {

  const overlay = document.getElementById("cart-overlay");

  overlay.style.display = "none";
}


// CHECKOUT
function checkout() {

  if (cart.length === 0) {

    alert("Your cart is empty!");

    return;
  }

  /*
    PAYMENT WILL BE CONNECTED LATER.

    For now, this shows a demo message.
  */

  alert(
    "Checkout selected! Payment gateway will be connected in the next step."
  );
}


// CLOSE CART WHEN CLICKING OUTSIDE
document.addEventListener("click", function(event) {

  const overlay = document.getElementById("cart-overlay");

  if (event.target === overlay) {

    closeCart();

  }

});


// INITIAL CART
updateCart();
