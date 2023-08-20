const input = document.getElementById("input");

let currentInput = "";
let currentOperator = "";
let previousInput = "";

document.querySelectorAll(".number, .dot").forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "." && currentInput.includes(".")) {
      return; // Birden fazla nokta engelle
    }
    if (button.textContent === "." && currentInput === "") {
      currentInput = "0"; // Sadece nokta tıklanınca başlangıçta "0" ekle
    }
    if (currentInput === "0" && button.textContent !== ".") {
      currentInput = ""; // 0'ı silerek yeni giriş başlat
    }
    if (button.textContent === ",") {
      currentInput += ".";
    } else {
      currentInput += button.textContent;
    }
    input.value = currentInput;
  });
});

document.querySelectorAll(".plus, .minus, .times, .slice").forEach((operator) => {
  operator.addEventListener("click", () => {
    if (currentInput !== "") {
      currentOperator = operator.textContent;
      previousInput = currentInput;
      currentInput = "";
    }
  });
});

document.querySelector(".equal").addEventListener("click", () => {
  if (currentInput !== "" && previousInput !== "") {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);
    let result;

    switch (currentOperator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "x":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
    }

    input.value = result;
    currentInput = result.toString();
    previousInput = "";
    currentOperator = "";
  }
});

document.querySelector(".reset").addEventListener("click", () => {
  currentInput = "";
  currentOperator = "";
  previousInput = "";
  input.value = "";
});

document.querySelector(".del").addEventListener("click", () => {
  currentInput = currentInput.slice(0, -1);
  input.value = currentInput;
});