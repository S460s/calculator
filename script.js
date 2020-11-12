let display = document.querySelector("#display");
let displayText = document.querySelector("#displayText");
let buttons = document.querySelectorAll("button");
let num1
let num2
let sign


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
  return Math.round((num1 / num2) * 10 ** 12) / 10 ** 12;
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



function calculatorLogic(char) {


  let possibleSigns = ["*", "/", "+", "-"]
  if (char === "clear") {
    num2 = undefined
    num1 = undefined
    sign = undefined
    displayText.textContent = ""
  }
  else if (char === "=") {

    if (num1 != undefined && num2 != undefined && sign != undefined) {

      displayText.textContent = operate(sign, +num1, +num2)
      num1 = displayText.textContent
      num2 = sign = undefined
      console.log(sign, num2, num1)
    }
  }
  else if (char == "ce") {
    len = displayText.textContent.length
    num1 = displayText.textContent = displayText.textContent.slice(0, len - 1)

    console.log(num1, num2, sign)

  }
  else if (char == ".") {
    if ((displayText.textContent.indexOf(".") < 0)) {
      displayText.textContent += "."
    }
  }
  else if (possibleSigns.includes(char)) {
    sign = char
    console.log(sign, num1, num2)
  }

  else if (char) {

    if (sign !== undefined) {

      if (num2 === undefined) {
        displayText.textContent = ""
      }

      if (displayText.textContent.length > 15) {
        alert("You can't enter more numbers.")
      }
      else {
        displayText.textContent += char
        num2 = displayText.textContent
        console.log(num1, num2, sign)
      }
    }

    else if (displayText.textContent.length > 15) {
      alert("You can't enter more numbers.")
    }
    else {
      displayText.textContent += char;
      num1 = displayText.textContent
      console.log(num1, num2)
    }
  }
}


function displayNubers() {

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      calculatorLogic(button.value)
    })
  });
}
displayNubers()
