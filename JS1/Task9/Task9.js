const num = parseInt(prompt("Enter an Integer"));
const checkMark = Math.sqrt(num);

let result = "PRIME";

if (num < 2) {
  result = "NOT PRIME";
} else {
  for (let i = 2; i <= checkMark; i++) {
    if (num % i === 0) {
      result = "NOT PRIME";
      break;
    }
  }
}

document.getElementById("print").innerHTML = `Verdict: ${num} IS ${result}`;
