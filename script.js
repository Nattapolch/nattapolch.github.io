const refreshPriceItem = function () {
  price_radio = document.querySelector('input[name="price-base"]:checked');
  pricePerItem.innerHTML = "$" + price_radio.value * input.value;
  price_radio_2 = document.querySelector('input[name="price-cart"]:checked');
  pricePerItem_2.innerHTML = "$" + price_radio_2.value * qty_item_2.value;
};
const refreshPriceItem_2 = function () {
  price_radio_2 = document.querySelector('input[name="price-cart"]:checked');
  pricePerItem_2.innerHTML = "$" + price_radio_2.value * qty_item_2.value;
};
const refreshTotalPrice = function(){
  let checkItem1 = document.querySelector(".cartItem1");
  let checkItem2 = document.querySelector(".cartItem2");
  if(!checkItem1.classList.contains('d-none')){
    priceItem1 = Number(price_radio.value ) * Number(input.value)
  }
  else{
    priceItem1 = 0;
  }
  if(!checkItem2.classList.contains('d-none')){
    priceItem2 = Number(price_radio_2.value ) * Number(qty_item_2.value)
  }
  else{
    priceItem2 = 0;
  }
  
  sumPrice = priceItem1 + priceItem2
  totalPrice.innerHTML = "$" + sumPrice 
}

const totalPrice = document.querySelector(".totalPrice");
const btnRemove = document.querySelectorAll(".button-remove");
const priceRadios = document.querySelectorAll(".price_radio");
const btnPriceSelect_Op2 = document.querySelector("#option2");
const input = document.querySelector("#qty");
const qty_item_2 = document.querySelector("#qty_item_2");
const btnminus = document.querySelector(".qtyminus");
const qtyminus_item_2 = document.querySelector(".qtyminus_item_2");
const btnplus = document.querySelector(".qtyplus");
const qtyplus_item_2 = document.querySelector(".qtyplus_item_2");
const pricePerItem = document.querySelector(".pricePerItem");
const pricePerItem_2 = document.querySelector(".pricePerItem_2");
let price_radio = document.querySelector('input[name="price-base"]:checked');
let price_radio_2 = document.querySelector('input[name="price-cart"]:checked');
let sum_quantity,priceItem1,priceItem2,sumPrice;
refreshPriceItem();
refreshTotalPrice();
btnplus.addEventListener("click", function () {
  sum_quantity = Number(input.value) + 1;
  input.value = sum_quantity;
  refreshPriceItem();
  refreshTotalPrice();
});
btnminus.addEventListener("click", function () {
  if (Number(input.value) - 1 > 0) {
    sum_quantity = Number(input.value) - 1;
    input.value = sum_quantity;
    refreshPriceItem();
    refreshTotalPrice();
  }
});
qtyplus_item_2.addEventListener("click", function () {
  sum_quantity = Number(qty_item_2.value) + 1;
  qty_item_2.value = sum_quantity;
  refreshPriceItem();
  refreshTotalPrice();
});
qtyminus_item_2.addEventListener("click", function () {
  if (Number(qty_item_2.value) - 1 > 0) {
    sum_quantity = Number(qty_item_2.value) - 1;
    qty_item_2.value = sum_quantity;
    refreshPriceItem();
    refreshTotalPrice();
  }
});
priceRadios.forEach((radio) => {
  radio.addEventListener("click", refreshPriceItem);
});
priceRadios.forEach((radio) => {
  radio.addEventListener("click", refreshTotalPrice);
});

btnRemove.forEach((button) => {
  button.addEventListener("click", function (event) {
    const row = event.target.closest(".row");
    row.classList.add("d-none");
    refreshTotalPrice();
  });
});
