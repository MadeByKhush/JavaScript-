let btn = document.getElementById("btn-submit");
let input = document.getElementById("input");
let heading = document.getElementById("text");

// On page load, show saved name if available
let saved = sessionStorage.getItem("name");
if (saved) {
  heading.textContent = `Hello ${saved}`;
}

btn.addEventListener("click", function () {
  let name = input.value.trim(); // remove extra spaces

  if (name === "") {
    heading.textContent = "❗ Please enter your name!";
    sessionStorage.removeItem("name"); // make sure nothing saved
  } else {
    sessionStorage.setItem("name", name);
    heading.textContent = `Hello ${name}`;
  }
});
