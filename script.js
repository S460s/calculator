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

  return Math.round((num1 / num2) * 10 ** 6) / 10 ** 6;
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
      return subbtract(num1, num2);

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
      if (button.value === "clear") {
        num2 = undefined
        num1 = undefined
        sign = undefined
        displayText.textContent = ""
      }

      else if (button.value === "=") {

        if (num1 != undefined && num2 != undefined && sign != undefined) {

          displayText.textContent = operate(sign, +num1, +num2)
          num1 = displayText.textContent
          num2 = undefined
          sign = undefined
          console.log(sign, num2, num1)
        }


        //        num2 = undefined
      }

      else if (!+button.value) {
        sign = button.value
        console.log(sign, num1, num2)
      }

      else {

        if (sign !== undefined) {

          num2 === undefined ? displayText.textContent = "" : console.log("good")
          displayText.textContent += button.value
          num2 = displayText.textContent
          console.log(num1, num2, sign + "s=u")

        }

        else {
          displayText.textContent += button.value;
          num1 = displayText.textContent
          console.log(num1, num2)
        }
      }
    });
  });
}

displayNumbers();

console.log(7 - 5)