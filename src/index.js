let firstNum = "";
let operator = "+";
let secondNum = "";
let change = false;
const screen = document.querySelector(".displayScreenBar");

//function for erasing display screen text
function erase() {
  firstNum = "";
  screen.innerText = "";
  change = false;
}

//function for deleting a digit
function backspace() {
  let screenDisplay = screen.innerText;
  let array = screenDisplay.split("");
  array.splice(array.length - 1, 1);
  console.log("in delete: " + array);
  screen.innerText = array.join("");
  firstNum = screen.innerText;
}

//function for displaying every button clicked
const buttons = document.querySelectorAll("button");

//use forEach to iterate over NodeList
buttons.forEach((button) => {
  button.addEventListener("click", displayButtonOnClick);
});

function displayButtonOnClick(e) {
  if (e.target.id == "equal") {
    console.log("equal button clicked: "+ typeof(screen.innerText));
    console.log(typeof(firstNum));
    if ((!(typeof(firstNum)==NaN||firstNum=="") && !(typeof(secondNum)==NaN||secondNum==""))) {
      console.log("inside NaN");
      console.log(firstNum + " " + operator + " " + secondNum);
      console.log(operate(firstNum, operator, secondNum));
      screen.innerText = operate(firstNum, operator, secondNum);
      firstNum = screen.innerText;
      secondNum = "";
    } else {
      screen.innerText = "";
    }
  } else if (e.target.id == "reset") {
    erase();
  } else if (e.target.id == "delete") {
    backspace();
  } else if (
    !(
      e.target.id == "plus" ||
      e.target.id == "minus" ||
      e.target.id == "multiply" ||
      e.target.id == "divide"
    )
  ) {
    if (change) {
      secondNum += e.target.innerText;
      screen.innerText = secondNum;
    } else {
      console.log("screen text after C: " + screen.innerText);
      firstNum += e.target.innerText;
      screen.innerText = firstNum;
    }
  } else {
    change = true;
    operator = e.target.innerText;
    screen.innerText = operator;
  }
}

function operate(firstNum, operator, secondNum) {
  firstNum = parseInt(firstNum);
  secondNum = parseInt(secondNum);
  if (operator == "+") {
    return add(firstNum, secondNum);
  } else if (operator == "-") {
    return subtract(firstNum, secondNum);
  } else if (operator == "x") {
    return multiply(firstNum, secondNum);
  } else if (operator == "÷") {
    return divide(firstNum, secondNum);
  }
}

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
  return num1 / num2;
}
