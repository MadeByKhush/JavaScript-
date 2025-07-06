let name = prompt("Enter Your Name");
const now = new Date();
const hour = now.getHours();

let greeting;

if (hour < 12) {
    greeting = "Good Moarning";
} else if (hour < 17) {
    greeting = "Good Afternoon";
} else if (hour < 20) {
    greeting = "Good Evening";
}
else {
    greeting = "Good Night";
}

document.getElementById("greet").innerText = (`Hello ${name} WhatsUp! ${greeting}`);