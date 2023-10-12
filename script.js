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
refreshPriceItem();

let sum_quantity;
btnplus.addEventListener("click", function () {
  sum_quantity = Number(input.value) + 1;
  input.value = sum_quantity;
  refreshPriceItem();
});
btnminus.addEventListener("click", function () {
  if (Number(input.value) - 1 > 0) {
    sum_quantity = Number(input.value) - 1;
    input.value = sum_quantity;
    refreshPriceItem();
  }
});
qtyplus_item_2.addEventListener("click", function () {
  sum_quantity = Number(qty_item_2.value) + 1;
  qty_item_2.value = sum_quantity;
  refreshPriceItem();
});
qtyminus_item_2.addEventListener("click", function () {
  if (Number(qty_item_2.value) - 1 > 0) {
    sum_quantity = Number(qty_item_2.value) - 1;
    qty_item_2.value = sum_quantity;
    refreshPriceItem();
  }
});
priceRadios.forEach((radio) => {
  radio.addEventListener("click", refreshPriceItem);
});

btnRemove.forEach((button) => {
  button.addEventListener("click", function (event) {
    const row = event.target.closest(".row");
    row.classList.add("d-none");
  });
});
