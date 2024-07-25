function add(a,b) {
    return +a + +b;
}

function subtract(a,b) {
    return a-b;
}

function multiply(a,b) {
    return a*b;
}

function divide(a,b) {
    if (b==0) {
        return 8008;
    } else {
        return a/b;
    }
}

function operate(num1, num2, oper) {
    switch (oper) {
        case "add":
            return add(num1, num2);
        case "substract":
            return substract(num1,num2);
        case "multiply":
            return multiply(num1,num2);
        case "divide":
            return divide(num1,num2);
    }
}

let number1 = null;
let operation = null;
let number2 = null;
let lastButtonOperation = false;
let lastButtonEquals = false;

const displayText = document.querySelector(".display p");

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        if (lastButtonOperation || lastButtonEquals) {
            displayText.textContent = "";
            lastButtonOperation = false;
            lastButtonEquals = false;
        };

        if (displayText.textContent == "0" || displayText.textContent == "00") {
            if (e.target.id != ".") {
                displayText.textContent = "";
            } 
        };

        if (displayText.textContent.length == 11)
            { 
        } else if (displayText.textContent.length == 10
            && e.target.id == "00") {
        } else if (displayText.textContent == "" 
            && e.target.id == "00") {
                displayText.textContent = "0";
        } else {
            if (e.target.id == "." && displayText.textContent.includes(".")) {
            } else {
                displayText.textContent += e.target.id;
                /* alert("got here 2") */
            }
        };
    });
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", (e) => {
    number1 = null;
    operation = null;
    number2 = null;
    displayText.textContent = "0";
});

const operandButtons = document.querySelectorAll(".operand");
operandButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        number1 = displayText.textContent;
        operation = e.target.id;
        lastButtonOperation = true;
    });
});

const alterationButtons = document.querySelectorAll(".alteration");
alterationButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        switch (e.target.id) {
            case "negative":
                displayText.textContent = -1 * displayText.textContent;
                break;
            case "percent":
                displayText.textContent = displayText.textContent / 100;
                break;
        }
        lastButtonOperation = false;
        lastButtonEquals = false;
    });
});

const equalsButton = document.querySelector("#equals");
equalsButton.addEventListener("click", (e) => {
    if (!lastButtonEquals) {
        number2 = displayText.textContent;
    }
    if (lastButtonEquals) {
        number1 = displayText.textContent;
    }

    switch (operation) {
        case "add":
            displayText.textContent = add(number1, number2);
            break;
        case "subtract":
            displayText.textContent = subtract(number1, number2);
            break;
        case "multiply":
            displayText.textContent = multiply(number1, number2);
            break;
        case "divide":
            let divided = String(divide(number1, number2));
            if (divided.length > 11) {
                displayText.textContent = divided.substring(0,11);
            } else {
                displayText.textContent = divided;
            }
            break;
    }

    lastButtonEquals = true;
});