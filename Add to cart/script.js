const cart = document.querySelector("#cart");
const cartSide = document.querySelector("#cart-side");
const minus = document.querySelector("#minus");
const plus = document.querySelector("#plus");
const value = document.querySelector("#item-value");

cart.addEventListener("click", function () {
  cartSide.classList.toggle("none");
});
// console.log(cart);

let item = 0;
function cartValue() {

       minus.addEventListener("click", () => {
       value.innerHTML = item--;
     });
       plus.addEventListener("click", () => {
       value.innerHTML = item++;
     });
   
}

cartValue();

