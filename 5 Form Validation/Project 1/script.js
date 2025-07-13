let btn = document.getElementById("submit-btn");

btn.addEventListener("click", function () {
    let name = document.getElementById("username").value.trim();
    let number = document.getElementById("phone").value.trim();
    let mail = document.getElementById("email").value.trim();
    let password = document.getElementById("pass").value.trim();
    let cpass = document.getElementById("confirm-pass").value.trim();


    //using multiple if because har condition ko independently check karna chahte hain
    // ✅ All fields empty case
    if (name === "" && mail === "" && number === "" && password === "" && cpass === "") {
        alert("All fields are mandatory!");
        return false;
    }

    // ✅ Individual checks
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (mail === "") {
        alert("Please enter your email.");
        return false;
    }

    if (number === "") {
        alert("Please enter your phone number.");
        return false;
    }

    if (number.length !== 10 || isNaN(number)) {
        alert("Phone number must be exactly 10 digits and numeric.");
        return false;
    }

    if (password === "") {
        alert("Please enter a password.");
        return false;
    }

    if (cpass === "") {
        alert("Please confirm your password.");
        return false;
    }

    if (password !== cpass) {
        alert("Passwords do not match.");
        return false;
    }

    // ✅ All good
    alert("Form submitted successfully!");
    return true;
}); 
