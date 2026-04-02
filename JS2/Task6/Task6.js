"use strinct";

function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

let result = 6;
let roll;

do {
  roll = diceRoll();
  console.log(roll);
  const resultList = document.getElementById("print");
  resultList.innerHTML += `<li>${roll}</li>`;
} while (roll !== result);
