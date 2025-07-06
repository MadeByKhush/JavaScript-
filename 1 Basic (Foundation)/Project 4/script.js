function checklogin()
{
    const correctusername = "admin";
    const correctpassword = "1234";

    const enteredusername = document.getElementById("username").value;
    const enterdpassword = document.getElementById("password").value;

    if(enteredusername === correctusername && enterdpassword === correctpassword)
    {
        document.getElementById("result").innerText = "✅ Login Successful!";
    }else
    {
        document.getElementById("result").innerText = "❌ Invalid Credentials!";
    }
}