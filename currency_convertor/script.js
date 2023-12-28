let select = document.querySelectorAll(".currency");
let inputCurrency = document.getElementById("input_currency");
let outputCurrency = document.getElementById("output_currency");

fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => {
    // console.log(data);
    const entries = Object.entries(data);
    // console.log(entries);
    for (i = 0; i < entries.length ; i++) {
      select[0].innerHTML += `<option>${entries[i][0]}</option>`;
      select[1].innerHTML += `<option>${entries[i][0]}</option>`;
    // console.log(entries[i]);
    }
  });

// console.log(select[0].localName);

function convert() {
  let inputCurrencyVal = inputCurrency.value;
  if (select[0].value != select[1].value) {

    const host = "api.frankfurter.app";
    fetch(
      `https://${host}/latest?amount=${inputCurrencyVal}&from=${select[0].value}&to=${select[1].value}`
    )
      .then((val) => val.json())
      .then((val) => {
        //alert(`10 GBP = ${data.rates.USD} USD`);
        outputCurrency.value = Object.values(val.rates)[0];
        console.log(Object.values(val.rates)[0]);
      });
  } else {
    alert("Please select two different currencies");
  }
}
