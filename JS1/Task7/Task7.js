const numDice = parseInt(prompt("Enter Number of Dice"));

const diceList = [];

for (let i = 0; i < numDice; i++) {
  const diceRoll = Math.floor(Math.random() * 6 + 1);
  diceList.push(diceRoll);
}
console.log(diceList);

let sumDice = diceList.reduce((sum, num) => sum + num, 0);
console.log(sumDice);

document.getElementById("print").innerHTML =
  `Sum of The Dice Rolls is: ${sumDice}`;
