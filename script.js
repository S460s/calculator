let display = document.querySelector("#display");
let displayText = document.querySelector("#displayText");
let buttons = document.querySelectorAll("button");
let num1;
let num2;
let sign;
let possibleSigns = ["*", "/", "+", "-", "Enter", "Delete"];

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
    alert("WARNING: You can not divide by zero!");
    return "";
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
  if (char === "clear") {
    num2 = undefined;
    num1 = undefined;
    sign = undefined;
    displayText.textContent = "";
  } else if (char === "Enter") {
    if (num1 != undefined && num2 != undefined && sign != undefined) {
      displayText.textContent = operate(sign, +num1, +num2);
      num1 = displayText.textContent;
      num2 = sign = undefined;
    }
  } else if (char == "Delete") {
    len = displayText.textContent.length;
    num1 = displayText.textContent = displayText.textContent.slice(0, len - 1);
  } else if (char == ".") {
    if (displayText.textContent.indexOf(".") < 0) {
      displayText.textContent += ".";
    }
  } else if (possibleSigns.includes(char)) {
    sign = char;
  } else if (char) {
    if (sign !== undefined) {
      if (num2 === undefined) {
        displayText.textContent = "";
      }

      if (displayText.textContent.length > 15) {
        alert("You can't enter more numbers.");
      } else {
        displayText.textContent += char;
        num2 = displayText.textContent;
      }
    } else if (displayText.textContent.length > 15) {
      alert("You can't enter more numbers.");
    } else {
      displayText.textContent += char;
      num1 = displayText.textContent;
    }
  }
}

function displayNumbers() {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      calculatorLogic(button.value);
    });
  });
}

function keyboardSupport() {
  document.addEventListener("keypress", function (e) {
    if (e.ctrlKey && e.key === "Delete") {
      calculatorLogic("clear");
    } else if (e.key - e.key == 0 || possibleSigns.includes(e.key)) {
      calculatorLogic(e.key);
    }
  });
}
displayNumbers();
keyboardSupport();
