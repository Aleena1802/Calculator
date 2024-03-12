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
  if (num2 == 0) {
    return "error";
  } else {
    return num1 / num2;
  }
}





let firstVariable = "";
let operator = "";
let secondVariable = "";
let sum;
let changeToSecondVariable=false;
const topScreen = document.querySelector(".displayOperation");
const bottomScreen=document.querySelector('.displaySum');





function operate(num1, operator, num2) {
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  if (operator == "+") {
   return add(num1, num2);
  } else if (operator == "-") {
    return subtract(num1, num2);
  } else if (operator == "x") {
    return multiply(num1, num2);
  } else if(operator=='÷') {
    return divide(num1, num2);
  }
}





let buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", populateScreen);
});

function displayButton(e) {
  if (!(e.target.id == "reset" || e.target.id == "delete")) {
    return e.target.innerText;
  }
}



let previousOperator='';

function populateScreen(e) {
  //let screen = document.querySelector(".displayOperation");
  if (e.target.id == "reset") {
    reset();
  }
  else if(e.target.id=='equal'){
    sum=operate(firstVariable,operator,secondVariable);
    //console.log(firstVariable + "  " + operator+" "+secondVariable);
    //console.log("sum: " +sum);
    bottomScreen.innerText = sum; 
  }
  else if(e.target.id=='delete'){
    backspace();
  }
  else {
   
    const currentButton = displayButton(e);
  const lastChar = topScreen.innerText.slice(-1); // Get the last character of topScreen

  // Check for double operator input
  if ((currentButton === "+" || currentButton === "-" || currentButton === "x" || currentButton === "÷") &&
      (lastChar === "+" || lastChar === "-" || lastChar === "x" || lastChar === "÷")) {
    return; 
  }

    // Prevent input of two operators side by side
  if(!(lastChar.match(/^[^\d]+$/) && currentButton.match(/^[^\d]+$/))){
    topScreen.innerText += currentButton;
    calculation(e);
  }
  previousOperator = currentButton; 


  
  }
}

function backspace(){
  let screenDisplayTop= topScreen.innerText;
  let arrayTop = screenDisplayTop.split("");
  arrayTop.splice(arrayTop.length - 1, 1);
  topScreen.innerText=arrayTop.join("");
}




function calculation(e) {

  if (!(e.target.id == "plus" || e.target.id == "minus" || e.target.id == "multiply" || e.target.id == "divide")){
    if (changeToSecondVariable) {
      secondVariable += e.target.innerText;
    }
    else{
      firstVariable += e.target.innerText;
    }
  }
  
  else {
    if(operator!=''&& secondVariable!=''){
      console.log(firstVariable + "  " + secondVariable);
      sum=operate(firstVariable,operator,secondVariable);
      firstVariable = sum;
      secondVariable = '';     
      operator=e.target.innerText;
      }
    else{
    operator = e.target.innerText;
    changeToSecondVariable=true;
    }
  }

  
}


function reset(){
  let screen = document.querySelector(".displayOperation");
  screen.innerText=null;
  firstVariable='';
  secondVariable='';
  operator='';
  topScreen.innerText = "";
  bottomScreen.innerText="";
  changeToSecondVariable=false;
}
