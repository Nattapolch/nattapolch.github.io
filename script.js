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
const refreshTotalPrice = function (discount) {
  let checkItem1 = document.querySelector(".cartItem1");
  let checkItem2 = document.querySelector(".cartItem2");
  if (!checkItem1.classList.contains("d-none")) {
    priceItem1 = Number(price_radio.value) * Number(input.value);
  } else {
    priceItem1 = 0;
  }
  if (!checkItem2.classList.contains("d-none")) {
    priceItem2 = Number(price_radio_2.value) * Number(qty_item_2.value);
  } else {
    priceItem2 = 0;
  }

  sumPrice = (priceItem1 + priceItem2) * (100-discount)/100;
  totalPrice.innerHTML = "$" + sumPrice;
};
const openModal = function () {
  console.log("Opening modal");
  modal.classList.remove("d-none");
  overlay.classList.remove("d-none");
};
const closeModal = function () {
  modal.classList.add("d-none");
  overlay.classList.add("d-none");
};
function CopyToClipboard (containerid) {
  let btnCopy = document.getElementById( "copy" );
  let main = document.getElementById( "maincontent" );
  let textarea = document.createElement("textarea");
  textarea.id = "temp_element";
  textarea.style.height = 0;
  document.body.appendChild(textarea);
  textarea.value = document.getElementById(containerid).innerText;
  let selector = document.querySelector("#temp_element");
  selector.select();
  document.execCommand("copy");
  document.body.removeChild(textarea); 
  if ( document.execCommand( "copy" ) ) {
      btnCopy.classList.add( "copied" );
    
      let temp = setInterval( function(){
        btnCopy.classList.remove( "copied" );
        clearInterval(temp);
      }, 600 );
    
  } else {
    console.info( "document.execCommand went wrong…" );
  }
    
}
const codeSubmit = document.querySelector(".codeSubmit");
const codeInput =document.querySelector(".codeInput");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".dealsmodal");
const overlay = document.querySelector(".overlay");
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
let sum_quantity, priceItem1, priceItem2, sumPrice;
const btnOpenModal = document.querySelector(".openModal");
if(codeSubmit){
  codeSubmit.addEventListener("click",function(){
    
    if(codeInput.value =="SPECIAL15"){

      refreshTotalPrice(15);
      Swal.fire(
        'Promotion Code Applied!',
        'You got discount 15%!',
        'success'
      )
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Wrong promotion code',
        footer: 'Please check the promo code at deals menu'
      })
    }
  })
}
if(btnOpenModal){
  btnOpenModal.addEventListener("click", openModal);
}

if(btnCloseModal){
  btnCloseModal.addEventListener("click", closeModal);
}
if(overlay){
  overlay.addEventListener("click", closeModal);
}

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("d-none")) {
    closeModal();
  }
});
btnplus.addEventListener("click", function () {
  sum_quantity = Number(input.value) + 1;
  input.value = sum_quantity;
  refreshPriceItem();
  refreshTotalPrice(0);
});
btnminus.addEventListener("click", function () {
  if (Number(input.value) - 1 > 0) {
    sum_quantity = Number(input.value) - 1;
    input.value = sum_quantity;
    refreshPriceItem();
    refreshTotalPrice(0);
  }
});
qtyplus_item_2.addEventListener("click", function () {
  sum_quantity = Number(qty_item_2.value) + 1;
  qty_item_2.value = sum_quantity;
  refreshPriceItem();
  refreshTotalPrice(0);
});
qtyminus_item_2.addEventListener("click", function () {
  if (Number(qty_item_2.value) - 1 > 0) {
    sum_quantity = Number(qty_item_2.value) - 1;
    qty_item_2.value = sum_quantity;
    refreshPriceItem();
    refreshTotalPrice(0);
  }
});
priceRadios.forEach((radio) => {
  radio.addEventListener("click", refreshPriceItem);
});
priceRadios.forEach((radio) => {
  radio.addEventListener("click", function(){
    refreshTotalPrice(0);
  });
});

btnRemove.forEach((button) => {
  button.addEventListener("click", function (event) {
    const row = event.target.closest(".row");
    row.classList.add("d-none");
    refreshTotalPrice(0);
  });
});
refreshPriceItem();
refreshTotalPrice(0);


