let display = document.getElementById("display");
let currentInput = "";
let previousInput = "";
let operator = "";

function appendNumber(number) {
    if (currentInput === "0" || currentInput === "") {
        currentInput = number.toString();
    } else {
        currentInput += number.toString();
    }
    updateDisplay();
}


function appendOperator(op) {
    if (currentInput === "") return;

    if (previousInput !== "") {
        calculateResult();
    }

    operator = op;
    previousInput = currentInput;
    currentInput = "";
    updateDisplay();
}


function updateDisplay() {
    display.textContent = currentInput || previousInput || "0";
}


function deleteLast() {
    currentInput = currentInput.slice(0, -1);
    updateDisplay();
}


function resetCalculator() {
    currentInput = "";
    previousInput = "";
    operator = "";
    updateDisplay();
}


function calculateResult() {
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);

    if (isNaN(prev) || isNaN(curr)) return;

    switch (operator) {
        case "+":
            result = prev + curr;
            break;
        case "-":
            result = prev - curr;
            break;
        case "*":
            result = prev * curr;
            break;
        case "/":
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = "";
    operator = "";
    updateDisplay();
}