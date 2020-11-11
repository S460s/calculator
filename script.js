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
let buttons = document.querySelectorAll("button");

function displayNumbers() {
  let num1
  let num2
  let sign

  buttons.forEach((button) => {


    button.addEventListener("click", () => {

      if (!+button.value) {
        sign = button.value
        console.log(sign)
      }
      else {

        if (sign !== undefined) {

          num2 === undefined ? displayText.textContent = "" : console.log("good")
          displayText.textContent += button.value
          num2 = displayText.textContent

        }
        else {
          displayText.textContent += button.value;
          num1 = displayText.textContent
        }
      }
    });
  });
}

displayNumbers();
