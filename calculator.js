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

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        alert(e.target.id);
    });
});