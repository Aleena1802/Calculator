//linking each button to display on text screen on click
const buttons = document.querySelectorAll('button');
const screen=document.querySelector('.displayScreenBar');

//use forEach to iterate over NodeList
buttons.forEach((button) => {
  button.addEventListener('click',displayButtonOnClick)
});

function displayButtonOnClick(e){
    if(e.target.id!='equal'){
    screen.innerText+=e.target.innerText;
    }
}


//function for erasing display screen text
const reset=document.getElementById('reset');
reset.addEventListener('click',erase);

function erase(){
    screen.innerText='';
}

const equal=document.getElementById('equal');
equal.addEventListener('click',add);
//functions for operation
function add(){
    console.log(screen.innerText);
}



