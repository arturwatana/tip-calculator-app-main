let totalValue = 0;
let tipPercentage = 0;

const total = document.getElementById("bill");
const tip = document.getElementById("groupTips");
const numberOfPeople = document.getElementById("numberOfPeople");
const tipAmount = document.getElementById("tipAmount");
const msgError = document.getElementById("msgError");
const custom = document.getElementById("custom");
const buttonReset = document.getElementById("buttonReset");

function getTip(event) {
  if (event) {
    tipPercentage = +event.target.value;
  } else {
    tipPercentage = +custom.value;
  }
}

function calcValues() {
  totalValue = +total.value;
  let tipValue = totalValue * (tipPercentage / 100);
  let newTotal = totalValue + tipValue;
  let tipPerPerson = tipValue / +numberOfPeople.value;
  tipAmount.innerText = `R$ ${tipPerPerson.toFixed(2)}`;
  totalPerson.innerText = `R$ ${newTotal.toFixed(2)}`;
}
function validateFields() {}

function resetFields() {
  tipAmount.innerText = `R$ 00,00`;
  totalPerson.innerText = `R$ 00,00`;
}

tip.addEventListener("click", function (event) {
  getTip(event);
});
numberOfPeople.addEventListener("change", () => {
  if (!tipPercentage) {
    getTip();
  }
  calcValues();
});

buttonReset.addEventListener("click", (event) => {
  resetFields();
});
