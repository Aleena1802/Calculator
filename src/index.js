//linking each button to display on text screen on click
const buttons = document.querySelectorAll('button');
const screen=document.querySelector('.displayScreenBar');

//use forEach to iterate over NodeList
buttons.forEach((button) => {
  button.addEventListener('click',displayButtonOnClick)
});

const reset=document.getElementById('reset');
reset.addEventListener('click',erase);

function erase(){
    screen.innerText='';
}

function displayButtonOnClick(e){
    screen.innerText+=e.target.innerText;
}
