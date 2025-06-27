function show_login() {
    let givenusername = document.getElementById("enterdusername").value;
    let givenpassword = document.getElementById("enterdpassword").value;

    const username = 'khush';
    const password = '1234';

    if (givenusername == username && givenpassword == password) {
        document.getElementById("login_message").innerText = (`Welcome ${username}`);
    } else {
        document.getElementById("login_message").innerText = (`Invalid credentials.`);
    }
}



function show_profile() {
    const student = {
        name: 'khush',
        age: 20,
        course: 'BCA',
        hobbies: ["Coding", "Gaming", "Music"]
    };

    let profiletext = "Name: " + student.name + "<br>" +
        "Age: " + student.age + "<br>" +
        "Course " + student.course + "<br>" +
        "Hobbies " + student.hobbies.join(", ");

    document.getElementById("display_profile").innerHTML = profiletext;

}

function result() {
    let num1 = parseFloat(document.getElementById("inputA").value);
    let num2 = parseFloat(document.getElementById("inputB").value);
    let opra = document.getElementById("operator").value;
    let showresult = '';
    {
    if (opra == '+') showresult = num1 + num2;
    else if (opra == '-') showresult = num1 - num2;
    else if (opra == '*') showresult = num1 * num2;
    else if (opra == '/') showresult = num2 !== 0 ? num1 / num2 : "Not Divided By Zero";
    }
    document.getElementById("resultshow").innerText = showresult;
}


function gradeshow() {
    let num1 = parseFloat(document.getElementById("mark1").value);
    let num2 = parseFloat(document.getElementById("mark2").value);
    let num3 = parseFloat(document.getElementById("mark3").value);
    let total = num1 + num2 + num3;
    let percent = (total / 300) * 100;

    let grade = percent >= 90 ? "Grade A" :
        percent >= 75 ? "Grade B" :
            percent >= 50 ? "Grade C" : "Fail";

    document.getElementById("showgrade").innerText = grade;
}

function MultiplicationCalculation() {
    let num = document.getElementById("number").value;
    let printtable = "";
    for (let i = 1; i <= 10; i++) {
        printtable += `${num} × ${i} = ${num * i}<br>`;
    }
    document.getElementById("showtable").innerHTML = printtable;
}