let arr = [];
let display = document.getElementById("display");
const clearButton = document.getElementById("clear-button");
const numButton = document.getElementsByClassName("num-button");
const equalButton = document.getElementById("equal-button");
const addButton = document.getElementById("add-button");
const subtractButton = document.getElementById("subtract-button");
const multiplyButton = document.getElementById("multiply-button");
const divideButton = document.getElementById("divide-button");

for (let i = 0; i < numButton.length; i++) {
    numButton[i].addEventListener("click", (event) => {
        if (display.value.includes("+") ||
            display.value.includes("-") ||
            display.value.includes("x") ||
            display.value.includes("÷")
        ) {
            display.value = "";
        }
        display.value += event.target.value;
    });
}

function operate() {
    arr.push(display.value);
    if (arr[1] == "+") {
        let result = (Number(arr[0]) + Number(arr[2]));
        display.value = result;
        arr = [];
    } else if (arr[1] == "-") {
        let result = (Number(arr[0]) - Number(arr[2]));
        display.value = result;
        arr = [];
    } else if (arr[1] == "x") {
        let result = (Number(arr[0]) * Number(arr[2]));
        display.value = result;
        arr = [];
    } else if (arr[1] == "÷") {
        let result = (Number(arr[0]) / Number(arr[2]));
        display.value = result;
        arr = [];
    }
}

function add() {
    arr.push(display.value);
    display.value = "+";
    arr.push("+");
    if (arr.length > 2) {
        let result = (Number(arr[0]) + Number(arr[2]));
        arr = [result, "+"];
        display.value = result + " +";
        return result;
    }
}

function subtract() {
    arr.push(display.value);
    display.value = "-";
    arr.push("-");
    if (arr.length > 2) {
        let result = (Number(arr[0]) - Number(arr[2]));
        arr = [result, "-"];
        display.value = result + " -";
        return result;
    }
}

function multiply() {
    arr.push(display.value);
    display.value = "x";
    arr.push("x");
    if (arr.length > 2) {
        let result = (Number(arr[0]) * Number(arr[2]));
        arr = [result, "x"];
        display.value = result + " x";
        return result;
    }
}

function divide() {
    arr.push(display.value);
    display.value = "÷";
    arr.push("÷");
    if (arr.length > 2) {
        let result = (Number(arr[0]) / Number(arr[2]));
        arr = [result, "÷"];
        display.value = result + " ÷";
        return result;
    }}

clearButton.addEventListener("click", () => {
    arr = [];
    display.value = "";
});

equalButton.addEventListener("click", () => {
    operate();
})

addButton.addEventListener("click", () => {
    add();
});

subtractButton.addEventListener("click", () => {
    subtract();
});

multiplyButton.addEventListener("click", () => {
    multiply();
})

divideButton.addEventListener("click", () => {
    divide();
})




// Create a new function that will perform an operation when the = button is clicked. Call the function if there are already 2 items inside of the array.
//Remove arr.push from the first part of add function, and instead, add " + " to the input box. Slice up the string into an array, using spaces as the delimiter.

// Use get element by clas name, loop through all elements with a for loop and apply event listener to each one