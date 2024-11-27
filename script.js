let display = document.getElementById("display");

function clearDiaplay() {
  display.innerText = "0";
}

function appendNumber(number) {
  if (display.innerText === "0") {
    display.innerText = number;
  } else {
    display.innerText += number;
  }
}

function appendOperator(operator) {
  const lastChar = display.innerText.slice(-1);
  if (!["+", "-", "*", "/"].includes(lastChar)) {
    display.innerText += operator;
  }
}

function deleteLast(params) {
  display.innerText = display.innerText.slice(0, -1) || "0";
}

function calculate() {
  try {
    display.innerText = eval(
      display.innerText.replace("ｘ", "*").replace("÷", "/")
    );
  } catch (error) {
    display.innerText = "Error";
  }
}
// thank u <3
