let totalValue = 0;
let tipPorcentage = 0;

const total = document.getElementById("bill");
const tip = document.getElementById("groupTips");
const numberOfPeople = document.getElementById("numberOfPeople");
const tipAmount = document.getElementById("tipAmount");

function getTip() {
  tip.addEventListener("click", function (event) {
    tipPorcentage = +event.target.value;
    totalValue = +total.value;
  });
}

function calcValues() {
  numberOfPeople.addEventListener("change", () => {
    let tipValue = totalValue * (tipPorcentage / 100);
    let newTotal = totalValue + tipValue;
    let tipPerPerson = tipValue / +numberOfPeople.value;
    tipAmount.innerText = `R$ ${tipPerPerson.toFixed(2)}`;
    totalPerson.innerText = `R$ ${newTotal.toFixed(2)}`;
  });
}

getTip();
calcValues();
