let bulbImg = document.getElementById("bulb");
let btn = document.getElementById("toggleBtn");

let flag = 0;

btn.addEventListener("click", function (e) {
    console.log("Event Object:", e);
    console.log("Event Type:", e.type);
    console.log("Target Element:", e.target);

    if (flag == 0) {
        bulbImg.src = "https://www.w3schools.com/js/pic_bulbon.gif";
        btn.innerText = "Turn Off"
        btn.style.backgroundColor = "red"
        flag++;
    } else {
        bulbImg.src = "https://www.w3schools.com/js/pic_bulboff.gif";
        btn.innerHTML = "Turn On"
        btn.style.backgroundColor = "green"
        flag--;
    }
});
