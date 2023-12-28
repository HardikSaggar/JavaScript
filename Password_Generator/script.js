const input = document.querySelector("#password");
const gen = document.querySelector(".gen");
const copy = document.querySelector(".copy");

gen.addEventListener("click", passwordGenerator);

copy.addEventListener("click", copyText);

function copyText() {
  input.select();
  input.setSelectionRange(0, 9999);
  navigator.clipboard.writeText(input.value);
  console.log(input.value);
}

function passwordGenerator() {
  let pass = "";
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i <= 8; i++) {
    let char = Math.floor(Math.random() * str.length + 1);
    pass += str.charAt(char);
  }
  input.value = pass;
  console.log("clicked");
}
