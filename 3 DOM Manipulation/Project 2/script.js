let headingText = document.getElementById("heading");
let inputfield = document.getElementById("text");

inputfield.addEventListener("input", function()
{
    headingText.textContent = inputfield.value;
});