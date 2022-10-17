let num1 = 10,
  num2 = 5;
document.getElementById("num1-el").textContent = num1;
document.getElementById("num2-el").textContent = num2;
let sumEl = document.getElementById("sum-all");

function add() {
  let result = num1 + num2;
  sumEl.textContent = "sum: " + result;
}
function subtract() {
  let result = num1 - num2;
  sumEl.textContent = "sum: " + result;
}
function multiply() {
  let result = num1 * num2;
  sumEl.textContent = "sum: " + result;
}
function divide() {
  let result = num1 / num2;
  sumEl.textContent = "sum: " + result;
}
