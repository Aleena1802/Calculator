//linking each button to display on text screen on click
const buttons = document.querySelectorAll('button');
//use forEach to iterate over NodeList
buttons.forEach((button) => {
  button.addEventListener('click',displayButtonOnClick)
});


function displayButtonOnClick(e){
    const screen=document.querySelector('.displayScreenBar');
    screen.innerText+=e.target.innerText;
}
