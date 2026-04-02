const diceCount = parseInt(prompt("Enter the Number of dice"));
const sumDice = parseInt(prompt("Enter the Sum of the Eyes"));

let matches = 0;
const loop = 10000;

for (let i = 0; i < loop; i++) {
  const diceList = [];

  for (let d = 0; d < diceCount; d++) {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceList.push(dice);
  }

  const sum = diceList.reduce((total, num) => total + num, 0);

  if (sum === sumDice) {
    matches++;
  }
}

const prob = ((matches / loop) * 100).toFixed(2);

console.log("Matches:", matches);
console.log("Probability:", prob);

document.getElementById("print").innerHTML =
  `Probability to get sum ${sumDice} with ${diceCount} dice is ${prob}%`;
