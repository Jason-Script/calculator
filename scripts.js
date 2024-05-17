let arr = [];
let display = document.getElementById("display");
const clearButton = document.getElementById("clear-button");
const numButton = document.getElementsByClassName("num-button");
const equalButton = document.getElementById("equal-button");
const addButton = document.getElementById("add-button");
const subtractButton = document.getElementById("subtract-button");
const multiplyButton = document.getElementById("multiply-button");
const divideButton = document.getElementById("divide-button");
const deleteButton = document.getElementById("delete-button");

for (let i = 0; i < numButton.length; i++) {
    numButton[i].addEventListener("click", (event) => {
        if (display.value.includes("+") ||
            display.value.includes("-") ||
            display.value.includes("x") ||
            display.value.includes("÷")
        ) {
            display.value = "";
        }
        if (display.value.includes(".") && event.target.value != ".") {
            display.value += event.target.value;
        } else if (!display.value.includes(".")) {
            display.value += event.target.value;
        }
    });
}

function operate() {
    if (display.value.includes("+") ||
        display.value.includes("-") ||
        display.value.includes("x") ||
        display.value.includes("÷")
    ) {
        return;
    }
    arr.push(display.value);
    if (arr[1] == "+") {
        let result = (Number(arr[0]) + Number(arr[2]));
        display.value = Math.round(result * 1000000) / 1000000;
        arr = [];
    } else if (arr[1] == "-") {
        let result = (Number(arr[0]) - Number(arr[2]));
        display.value = Math.round(result * 1000000) / 1000000;
        arr = [];
    } else if (arr[1] == "x") {
        let result = (Number(arr[0]) * Number(arr[2]));
        display.value = Math.round(result * 1000000) / 1000000;
        arr = [];
    } else if (arr[1] == "÷") {
        let result = (Number(arr[0]) / Number(arr[2]));
        display.value = Math.round(result * 1000000) / 1000000;
        arr = [];
    }
}

function add() {
    if (display.value != "") {
        arr.push(display.value);
        }
    display.value = "+";
    arr.push("+");
    if (arr.length > 2) {
        let result = (Number(arr[0]) + Number(arr[2]));
        arr = [result, "+"];
        display.value = Math.round(result * 1000000) / 1000000 + " +";
        return Math.round(result * 1000000) / 1000000;
    }
}

function subtract() {
    if (display.value != "") {
        arr.push(display.value);
        }
    display.value = "-";
    arr.push("-");
    if (arr.length > 2) {
        let result = (Number(arr[0]) - Number(arr[2]));
        arr = [result, "-"];
        display.value = Math.round(result * 1000000) / 1000000 + " -";
        return Math.round(result * 1000000) / 1000000;
    }
}

function multiply() {
    if (display.value != "") {
    arr.push(display.value);
    }
    display.value = "x";
    arr.push("x");
    if (arr.length > 2) {
        let result = (Number(arr[0]) * Number(arr[2]));
        arr = [result, "x"];
        display.value = Math.round(result * 1000000) / 1000000 + " x";
        return Math.round(result * 1000000) / 1000000;
    }
}

function divide() {
    if (display.value != "") {
    arr.push(display.value);
    }
    display.value = "÷";
    arr.push("÷");
    if (arr.length > 2) {
        let result = (Number(arr[0]) / Number(arr[2]));
        arr = [result, "÷"];
        display.value = Math.round(result * 1000000) / 1000000 + " ÷";
        return Math.round(result * 1000000) / 1000000;
    }}

function remove() {
    arr.pop();
    display.value = arr;
}

clearButton.addEventListener("click", () => {
    arr = [];
    display.value = "";
});

equalButton.addEventListener("click", () => {
    operate();
});

addButton.addEventListener("click", () => {
    add();
});

subtractButton.addEventListener("click", () => {
    subtract();
});

multiplyButton.addEventListener("click", () => {
    multiply();
});

divideButton.addEventListener("click", () => {
    divide();
});

deleteButton.addEventListener("click", () => {
    remove();
});



