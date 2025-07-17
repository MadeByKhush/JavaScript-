let city = document.getElementById("input-city");
let btn = document.getElementById("check-btn");
let show = document.querySelector("h3");

btn.addEventListener("click", function()
{
    const input = city.value.trim();
    let url = `https://api.weatherapi.com/v1/current.json?key=97267fe981de41fbaef172624251607&q=${input}`;
    fetch(url)
    .then( response => response.json())
    .then(data => {
        const temprature = data.current.temp_c;
        show.textContent = `tempratur in ${input} is ${temprature}°C`;
    })
    .catch(error => {
        show.textContent = `There is an Problem With Fetching Data from API`;
    })
})
