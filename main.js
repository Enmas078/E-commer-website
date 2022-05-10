let carticon = document.querySelector("#cart-icon");
let cart= document.querySelector(".cart");
let closecart = document.querySelector("#close-cart");
carticon.onclick = () => {
  cart.classList.add("active");
}
closecart.onclick = () => {
  cart.classList.remove("active");
}


if (document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  var reomovecartbutton = document.getElementsByClassName("cart-remove");
  for ( var i = 0; i < reomovecartbutton.length; i++){
  var button = reomovecartbutton[i];
  button.addEventListener("click", removeCartItem);
}
var quantityinputs = document.getElementsByClassName("cart-quantity");
for ( var i = 0; i < quantityinputs.length; i++){
  var input = quantityinputs[i];
  input.addEventListener("change", quantityChanged)
}
var addCart = document.getElementsByClassName("add-cart");
for (var i; i < addCart.length; i++){
  var button = addCart[i];
  button.addEventListener("click",  addCartClickd)
}
}

function removeCartItem(event) {
  var buttonClicked = event.target;
  buttonClicked.parentElement.remove();
  updatotal();
}
function quantityChanged (event){
  var input = event.target;
  if(isNaN(input.value) || input.value <= 0) {
    input.value = 1; 
  }
  updatotal();
}
function addCartClickd(event){
  var button = event.target;
  var shopProducts = button.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var productImg = document.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updatotal();
  
}

function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
 // cartShopBox.classList.add("card-box");
 var cartItems = document.getElementsByClassName("cart-content");
 var cartItemsNames = cartItems.document.getElementsByClassName("cart-product-title");
 for(var i =0; i < cartItemsNames.length; i++){
   alert("you have already added this item");
 }
}
var cartBoxContent = 
function updatotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBoxes = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for ( var i = 0; i < cartBoxes.length; i++){
var cartBox = cartBoxes[i];
var priceElement = cartBox.getElementsByClassName("cart-price")[0];
var quantityElement = cartBox.getElementsByClassName("cart-quantity")[0];
var price = parseFloat(priceElement.innerText.replace("$", " "))
var quantity = quantityElement.value;
total = total + (price * quantity);
total = Math.round (total * 100) / 100;
document.getElementsByClassName("total-price")[0].innerText ="$" + total;
  }
  }
  

