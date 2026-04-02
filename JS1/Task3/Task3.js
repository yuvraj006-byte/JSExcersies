const input1 = parseInt(prompt("Enter First Integer:"));
const input2 = parseInt(prompt("Enter Second Integer:"));
const input3 = parseInt(prompt("Enter Third Integer:"));

const numSum = input1 + input2 + input3;
const numProduct = input1 * input2 * input3;
const numAvg = numSum / 3;

document.getElementById("print").innerHTML =
  "Sum Of the Integers: " + numSum + "<br>" +
  "Product Of the Integers: " + numProduct + "<br>" +
  "Average Of the Integers: " + numAvg.toFixed(2);