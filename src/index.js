let firstNum = "";
let firstNumDisplay = "";
let operator = "+";
let secondNum = "";
let change = false;
let count = 0;
const topScreen = document.querySelector(".displayOperation");
const bottomScreen=document.querySelector('.displaySum');

//function for erasing display screen text
function erase() {
  firstNum = "";
  topScreen.innerText = "";
  bottomScreen.innerText="";
  change = false;
}

//function for deleting a digit
function backspace() {
  let screenDisplayBottom = bottomScreen.innerText;
  let screenDisplayTop= topScreen.innerText;

  let arrayBottom = screenDisplayBottom.split("");
  let arrayTop = screenDisplayTop.split("");

  arrayBottom.splice(arrayBottom.length - 1, 1);
  arrayTop.splice(arrayTop.length - 1, 1);

  bottomScreen.innerText = arrayBottom.join("");
  topScreen.innerText=arrayTop.join("");
  firstNum = bottomScreen.innerText;
  console.log(firstNum);
}

//function for displaying every button clicked
const buttons = document.querySelectorAll("button");

//use forEach to iterate over NodeList
buttons.forEach((button) => {
  button.addEventListener("click", displayButtonOnClick);
});

function displayButtonOnClick(e) {
  if (e.target.id == "equal") {
    if (
      !(typeof firstNum == NaN || firstNum == "") &&
      !(typeof secondNum == NaN || secondNum == "")
    ) {
      console.log(firstNum);
      bottomScreen.innerText = operate(firstNum, operator, secondNum);
      firstNum = bottomScreen.innerText;
      secondNum = "";
      topScreen.innerHTML=firstNum;
    } else {
      bottomScreen.innerText = "";
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
    if (firstNum!='') {
      secondNum += e.target.innerText;
      bottomScreen.innerText = secondNum;
      topScreen.innerText+=e.target.innerText;
    } else {
      firstNum += e.target.innerText;
      bottomScreen.innerText = firstNum;
      topScreen.innerText=firstNum;
    }
  } else {
    operator = e.target.innerText;
    bottomScreen.innerText = operator;
    topScreen.innerText+=operator;
    secondNum='';
    change=true;
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
