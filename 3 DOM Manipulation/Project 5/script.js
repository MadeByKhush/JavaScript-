const btn1 = document.getElementById("increase");
const btn2 = document.getElementById("decrease");
let counterBtn = document.getElementById("count");
let counter = 0;
btn1.addEventListener('click', function()
{
    counter++;
    counterBtn.textContent = counter;
})

btn2.addEventListener('click', function()
{
    counter--;
    counterBtn.textContent = counter;
})