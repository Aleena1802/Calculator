
let firstNum='';
let operator = "+";
let secondNum = '';
let change=false;
let secondVariable='';


const buttons = document.querySelectorAll("button");
const screen = document.querySelector(".displayScreenBar");

//use forEach to iterate over NodeList
buttons.forEach((button) => {
  button.addEventListener("click", displayButtonOnClick);
});

function displayButtonOnClick(e) {
  if(e.target.id=='equal'){
    console.log(firstNum + ' '+operator+' '+ secondNum);
    console.log(operate(firstNum,operator,secondNum));
    screen.innerText=operate(firstNum,operator,secondNum);
    firstNum=screen.innerText;
    secondNum='';
  }else if (!(e.target.id == "plus"||e.target.id == "minus"||e.target.id == "multiply"||e.target.id == "divide")) {
    if(change){
      secondNum+=e.target.innerText;
      screen.innerText=secondNum;
    }
    else{
    firstNum += e.target.innerText;
    screen.innerText=firstNum;
    }

  }else{
    change=true;
    operator=e.target.innerText;
    screen.innerText=operator;
  }

}

function operate(firstNum, operator, secondNum) {
  firstNum=parseInt(firstNum);
  secondNum=parseInt(secondNum);
  if (operator == "+") {
    return add(firstNum,secondNum);
  }
  else if(operator=='-'){
    return subtract(firstNum, secondNum);
  }
  else if(operator=='x'){
    return multiply(firstNum,secondNum);
  }
  else if(operator=='÷'){
    return divide(firstNum,secondNum)
  }
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1*num2;
}

function divide(num1, num2) {
  return num1 / num2;
}