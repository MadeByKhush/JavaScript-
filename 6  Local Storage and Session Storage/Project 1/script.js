let btn = document.getElementById("btn-submit");
let input = document.getElementById("input");
let heading = document.getElementById("text");

// show stored name if page refreshed
let saved = sessionStorage.getItem("name");
if (saved) heading.textContent = saved;

btn.addEventListener("click", function () {
  let name = input.value;
  sessionStorage.setItem("name", name);
  heading.textContent = name;
});
