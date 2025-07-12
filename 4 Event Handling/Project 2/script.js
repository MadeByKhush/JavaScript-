let clrRed = document.getElementById("red");
let clrGreen = document.getElementById("green");
let clrBlue = document.getElementById("blue");
const body = document.querySelector("body");
let head = document.querySelector("h2");
let rset = document.getElementById("reset");



clrRed.addEventListener('click', function()
{
    body.style.backgroundColor = "red";
    head.innerHTML = "Your Background Is Red Now!"
    
});

clrGreen.addEventListener('click', function()
{
    body.style.backgroundColor = "green";
    head.innerHTML = "Your Background Is Green Now!"
});

clrBlue.addEventListener('click', function()
{
    body.style.backgroundColor = "blue";
    head.innerHTML = "Your Background Is Blue Now!"
});

rset.addEventListener('click', function()
{
    body.style.backgroundColor = "white";
    head.innerText = `Your Background is White Click on Buttons to make it Cool`;;
});