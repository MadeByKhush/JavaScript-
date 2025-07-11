const toggleBtn = document.getElementById("menu-toggle");
const navLink = document.getElementById("nav-links");

toggleBtn.addEventListener("click", function() 
{
  navLink.classList.toggle("hidden");
})