let userinput = prompt("Enter Your Number");
let message = `You enterd : ${userinput} <br>`;

let type = typeof userinput;
message += `The Type is : ${type} <br>`;

let number = userinput
if (!isNaN(number)) {
    if (number > 0) {
        message += "It is a Positive Number";
    }
    else if (number < 0) {
        message += "It is a Negative Number";
    }
    else {
        message += "It is a Zero";
    }
} else {
    message += "Not a Number";
}

document.getElementById("show").innerHTML = message;