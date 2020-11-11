function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  if (num2 === 0) {
    alert("WARNING: You can not divide by zero!")
    return ""
  }
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
      return subtract(num1, num2);

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
  let possibleSigns = ["*", "/", "+", "-"]

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
          num2 = sign = undefined
          console.log(sign, num2, num1)
        }
      }
      else if (button.value == "ce") {
        len = displayText.textContent.length
        num1 = displayText.textContent = displayText.textContent.slice(0, len - 1)

        console.log(num1, num2, sign)

      }
      else if (button.value == ".") {
        if ((displayText.textContent.indexOf(".") < 0)) {
          displayText.textContent += "."
        }
      }


      else if (possibleSigns.includes(button.value)) {
        sign = button.value
        console.log(sign, num1, num2)
      }

      else {

        if (sign !== undefined) {

          if (num2 === undefined) {
            displayText.textContent = ""
          }

          if (displayText.textContent.length > 15) {
            alert("You can't enter more numbers.")
          }
          else {
            displayText.textContent += button.value
            num2 = displayText.textContent
            console.log(num1, num2, sign)
          }
        }

        else if (displayText.textContent.length > 15) {
          alert("You can't enter more numbers.")
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