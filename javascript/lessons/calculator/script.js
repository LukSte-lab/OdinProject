// declare global variables and initialize
let num1 = 0;
let tempNum1Array = [];
let num2 = 0;
let tempNum2Array = [];
let savedFirstValue = 0;
let operator = "";
let tempOperatorArray = [];


// basic sub-functions for the math ops //


function add(num1, num2) {
  let addValue = (num1 + num2);
  let rounded = Math.round((addValue + Number.EPSILON) * 100) / 100;
  rounded = rounded.toFixed(2);
  console.log("add", rounded);
  const calcDisplay = document.querySelector("#display");
  calcDisplay.textContent = rounded;
}

function subtract(num1, num2) {
  let subtractValue = (num1 - num2);
  let rounded = Math.round((subtractValue + Number.EPSILON) * 100) / 100;
  rounded = rounded.toFixed(2);
  console.log("subtract", rounded);
  const calcDisplay = document.querySelector("#display");
  calcDisplay.textContent = rounded;
}

function multiply(num1, num2) {
  let multiplyValue = (num1 * num2);
  let rounded = Math.round((multiplyValue + Number.EPSILON) * 100) / 100;
  rounded = rounded.toFixed(2);
  console.log("multiply", rounded);
  const calcDisplay = document.querySelector("#display");
  calcDisplay.textContent = rounded;
}

function divide(num1, num2) {
  let divideValue = (num1 / num2);

  // error check for division by 0
  if (divideValue == "Infinity") {
    return alert("Error!  Cannot divide by zero!  You should know better....");
  } else {
    let rounded = Math.round((divideValue + Number.EPSILON) * 100) / 100;
    rounded = rounded.toFixed(2);
    console.log("divide", rounded);
    const calcDisplay = document.querySelector("#display");
    calcDisplay.textContent = rounded;
  }
}

// use operator variable to determine which function to call
function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      console.log("passing through switch +");
      add(num1, num2);
      break;
    case "-":
      console.log("passing through switch -");
      subtract(num1, num2);
      break;
    case "*":
      console.log("passing through switch *");
      multiply(num1, num2);
      break;
    case "/":
      console.log("passing through switch /");
      divide(num1, num2);
      break;
    default:
      alert("ERROR!  Didn't receive an operator, or type not as expected!");
  }
}


// Calculator Advanced Features & Algo   //


function runCalculator() {

  function getNumberClicked() {
    const operandButtons = document.querySelectorAll(".operand");
    operandButtons.forEach((button) => {
      button.addEventListener('click', () => {
        console.log("hit me for first number!");
        savedFirstValue = button.getAttribute("value");
        console.log(savedFirstValue);
        const calcDisplay = document.querySelector("#display");

        // append to num1 if multiple numbers are pressed and display out
        if (operator == "")  {
          tempNum1Array.push(savedFirstValue);
          console.log("show me the array1: ", tempNum1Array);
          num1 = tempNum1Array.join("");
          console.log("saved first value is: ", num1);
          calcDisplay.textContent = num1;
        } else {

          // append to num2 if multiple numbers are pressed and display out
          tempNum2Array.push(savedFirstValue);
          console.log("show me the array2: ", tempNum2Array);
          num2 = tempNum2Array.join("");
          console.log("num2 is: ", num2)
          calcDisplay.textContent = num2;
        }
      })
    })
  }

  function getOperatorSelection() {
    const operatorButtons = document.querySelectorAll(".operator");
    operatorButtons.forEach((button) => {
      button.addEventListener('click', () => {
        console.log("hit me operator!");
        operator = button.getAttribute("value");
        console.log(operator);
        tempOperatorArray.push(operator);
        console.log("store temp operator in array for string calcs: ", tempOperatorArray);

        // enable the decimal button if disabled from previous click/use
        document.getElementById("decimal").disabled = false;
        console.log("decimal button should be ENABLED now")

        // check to see if a multi-operand string exists and needs calculated on the fly
        if ((tempNum1Array != "") && (tempNum2Array != "")) {
          const calcDisplay = document.querySelector("#display");
          num1 = tempNum1Array.join("");
          num2 = tempNum2Array.join("");
          num1 = parseFloat(num1);
          num2 = parseFloat(num2);
          let tempOperator = tempOperatorArray[tempOperatorArray.length - 2].toString();
          console.log("Running STRING calculation now!");
          operate(tempOperator, num1, num2);
          let tempStringValue = calcDisplay.textContent;
          console.log("temp string value: ", tempStringValue);
          console.log("clearing out the arrays and nums now!");
          tempNum1Array = [];
          tempNum2Array = [];
          num1 = 0;
          num2 = 0;
          console.log("array 1:", tempNum1Array);
          console.log("array 2:", tempNum2Array);
          console.log("num1: ", num1);
          console.log("num2: ", num2);
          tempNum1Array.push(tempStringValue);
          num1 = tempNum1Array.join("");
          console.log("pushed string value to array 1: ", tempNum1Array);
        }
      })
    })
  }

  function runCalculation() {
    const equalsButton = document.querySelector(".equals");
    equalsButton.addEventListener('click', () => {
      console.log("time to run the math!", num1, num2, operator);
      const calcDisplay = document.querySelector("#display");
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      operate(operator, num1, num2);
    })
  }

  // DOM for "Clear" button
  const clearButton = document.querySelector(".clear");
  clearButton.addEventListener('click', () => { location.reload(); })

  // DOM for "+/-"" button
  const signButton = document.querySelector(".sign");
  signButton.addEventListener('click', () => {

    // append "+/-" to numarray1 and display out
    if (operator == "") {
      const calcDisplay = document.querySelector("#display");
      console.log("negative button registered here!");
      tempNum1Array.splice(0, 1, (tempNum1Array[0] * -1).toString());
      console.log("append the array with negative number: ", tempNum1Array);
      num1 = tempNum1Array.join("");
      calcDisplay.textContent = num1;
    } else {

      // append "+/-" to numarray2 and display out
      const calcDisplay = document.querySelector("#display");
      console.log("negative button registered here on num2!");
      tempNum2Array.splice(0, 1, (tempNum2Array[0] * -1).toString());
      console.log("append the array with negative number on num2: ", tempNum2Array);
      num2 = tempNum2Array.join("");
      calcDisplay.textContent = num2;
    }
  })

  // DOM for "decimal" button
  const decimalButton = document.querySelector(".decimal");
  decimalButton.addEventListener('click', () => {
    console.log("decimal pressed");
    let decimalButton = ".";
    const calcDisplay = document.querySelector("#display");

    // append "decimal" to numarray1 and display out
    if (operator == "") {
      const calcDisplay = document.querySelector("#display");
      console.log("decimal button registered here!", decimalButton);
      tempNum1Array.push(decimalButton);
      console.log("append the array1 with decimal: ", tempNum1Array);
      num1 = tempNum1Array.join("");
      calcDisplay.textContent = num1;
      document.getElementById("decimal").disabled = true;
      console.log("num1 decimal button should be disabled now");
    } else {

      // append "decimal" to numarray2 and display out
      const calcDisplay = document.querySelector("#display");
      console.log("decimal button registered here!", decimalButton);
      tempNum2Array.push(decimalButton);
      console.log("append the array1 with decimal: ", tempNum2Array);
      num2 = tempNum2Array.join("");
      calcDisplay.textContent = num2;
      document.getElementById("decimal").disabled = true;
      console.log("num2 decimal button should be disabled now");
    }
  })

  // call/run the advanced sub-functions
  getNumberClicked();
  getOperatorSelection();
  runCalculation();
}

// call/run the main function
runCalculator();