let heading = document.getElementById("heading");
let button = document.getElementById("btn");
let span = document.querySelector("span"); // selecting the span

button.addEventListener("click", function() {
  heading.innerHTML = 'This is The Heading <span>After</span> Click Changed !';

  // After changing HTML, re-select the new <span>
  span = document.querySelector("span"); // update reference
  span.style.color = "white"; // apply style
});
