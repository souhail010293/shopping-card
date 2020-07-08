//Variables Globales
const likeBtn = Array.from(document.querySelectorAll(".like-btn"));
const minusBtn = Array.from(document.querySelectorAll(".minus-btn"));
const plusBtn = Array.from(document.querySelectorAll(".plus-btn"));
const quantity = Array.from(document.querySelectorAll(".quantity"));
const price = Array.from(document.querySelectorAll(".unit-price"));
const removeBtn = Array.from(document.querySelectorAll(".remove-btn"));
const totalPrice = document.querySelector(".total-price");

//Change Color Function
function changeColor(el) {
  console.log(el);
  if (el.target.style.color !== "red") {
    el.target.style.color = "red";
  } else {
    el.target.style.color = "black";
  }
}

//Update Total
function updateTotal() {
  let total = 0;
  for (let i = 0; i < quantity.length; i++) {
    total = total + quantity[i].innerText * price[i].innerText;
  }
  totalPrice.innerText = total;
}

// plus btn event listener
function increment(el) {
  el.target.previousElementSibling.innerText =
    Number(el.target.previousElementSibling.innerText) + 1;
  updateTotal();
}

//Minus btn
function decrement(el) {
  if (Number(el.target.nextElementSibling.innerText) < 1) {
    el.target.nextElementSibling.innerText = 0;
    return;
  } else {
    el.target.nextElementSibling.innerText =
      Number(el.target.nextElementSibling.innerText) - 1;
  }
  updateTotal();
}

//remove listener
function removeElement(el) {
  el.target.parentElement.parentElement.remove();
  quantity[i].innerText = 0;
  updateTotal();
}

// Loop to add the Events on each button

for (let i = 0; i < plusBtn.length; i++) {
  //Like Btn
  likeBtn[i].addEventListener("click", changeColor);

  // Plus Btn
  plusBtn[i].addEventListener("click", increment);

  //Minus btn

  minusBtn[i].addEventListener("click", decrement);

  //remove btn

  removeBtn[i].addEventListener("click", removeElement);
}