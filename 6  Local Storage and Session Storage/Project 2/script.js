let btn = document.getElementById("btn-submit");
let input = document.getElementById("input");
let heading = document.getElementById("text");

// On page load, show saved name if available
let saved = localStorage.getItem("name");
if (saved) {
  heading.textContent = `Hello ${saved}`;
}

// Handle button click
btn.addEventListener("click", function () {
  let name = input.value.trim();

  if (name === "") {
    heading.textContent = "❗ Please enter your name!";
    localStorage.removeItem("name");
  } else {
    localStorage.setItem("name", name);
    heading.textContent = `Hello ${name}`;
    input.value = ""; // Clear input field
  }
});