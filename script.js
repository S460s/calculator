function add(num1, num2) {
  return num1 + num2;
}
function subbtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function operate(sign, num1, num2) {
  switch (true) {
    case sign === "*":
      return multiply(num1, num2);
    case sign === "/":
      return divide(num1, num2);
    case sign === "+":
      return add(num1, num2);
    case sign === "-":
      return divide(num1, num2);

    default:
      break;
  }
}

let display = document.querySelector("#display");
let displayText = document.querySelector("#displayText");
let displayValue = [];
let buttons = document.querySelectorAll("button");

function displayNumbers() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      displayText.textContent = button.value;
    });
  });
}

displayNumbers();
