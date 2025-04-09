let cartArray = JSON.parse(localStorage.getItem("cart")) || [];
let showCart = document.getElementById("show-cart");
let counter = document.getElementById("p-counter");
let productLable = document.getElementById("productLable");
let finalTotal = document.getElementById("Total");
let lsTotal = document.getElementById("lsTotal");

function clrCart(){
  localStorage.removeItem("cart");
}

const saveToLocal = () => {
  localStorage.setItem("cart", JSON.stringify(cartArray));
}
const removeItem = (idx) => {
  cartArray.splice(idx, 1)
  saveToLocal()
  displayCart()
  counter.innerHTML = cartArray.length;
}
const updateQuantity = (idx, value) => {
  cartArray[idx].quantity += value;
  if (cartArray[idx].quantity < 1) {
    removeItem(idx)
  } else {
    saveToLocal()
  }
  displayCart()

}

function clearAll() {
    localStorage.removeItem("cart")
    location.reload();
}

function displayCart() {
  let subTotal = 0;

  if (cartArray.length <= 0) {
    productLable.classList.add("d-none")
    cartImage.classList.remove("d-none")
  } else {
    productLable.classList.remove("d-none")
    cartImage.classList.add("d-none")
  }
  showCart.innerHTML = "";

  cartArray.forEach((item, idx) => {
    console.log(item.name);

    let totalPrice = item.price * item.quantity;
    subTotal = subTotal + totalPrice;
    showCart.innerHTML += ` 
        <div class="col-md-2 col-6 text-center">
          <div>
            <img src="${item.img}" class="product-img"
              alt="${item.name}">
          </div>
        </div>
        <div class="col-md-4 col-6 text-center">
          <div>
            <h5 class="m-3">${item.name}</h5>
          </div>
        </div>
        <div class="col-md-2 col-6 text-center">
          <div class="c-price">
            <h4 class="fw-bold mb-0 text-body-secondary">$${item.price}</h4>
          </div>
        </div>
        <div class="col-md-2 col-6 text-center">
          <div class="cart-input">
            <button class="border-0 rounded-1 bg-body-secondary fw-bold button" onclick="updateQuantity(${idx},-1)"><i class="ri-subtract-line"></i></button>
            <span class="fw-bold m-2">${item.quantity}</span>
            <button class="border-0 rounded-1 bg-body-secondary fw-bold button" onClick="updateQuantity(${idx}, 1)"><i class="ri-add-line"></i></button>
          </div>
        </div>
        <div class="col-md-2 col-9 text-center justify-content-center">
          <div class="sub-totl d-flex justify-content-between">
            <span>$${(totalPrice.toFixed(2))}</span>
            <div onclick="removeItem(${idx})"><i class="ri-delete-bin-fill"></i></div>
          </div>
        </div>
      `
      finalTotal.innerHTML = `$${subTotal}`
      lsTotal.innerHTML = `$${subTotal}`
  });
}

displayCart();
counter.innerHTML = cartArray.length