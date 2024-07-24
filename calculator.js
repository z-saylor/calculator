function add(a,b) {
    return a+b;
}

function substract(a,b) {
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

let number1;
let operation;
let number2;

const displayText = document.querySelector(".display p");

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        alert(e.target.id);
    });
});

const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", (e) => {
    alert("clearin");
});

const operandButtons = document.querySelectorAll(".operand");
operandButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        alert("operatin");
    });
});

const alterationButtons = document.querySelectorAll(".alteration");
alterationButtons.forEach(button => {
    button.addEventListener("click", (e) => {
        alert("alterin");
    });
});