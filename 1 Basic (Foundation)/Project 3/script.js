let num1 = prompt("Enter Your First Number");
num1 = Number(num1);
let num2 = prompt("Enter Your Second Number");
num2 = Number(num2);
let operator = prompt("Operation You hava to Perform +,-,*,/");

let result;
if(operator == '+')
{
    result = num1 + num2;
}else if(operator == '-')
    {
        result = num1 - num2;
    } 
    else if(operator == '*')
    {
        result = num1 * num2
    }
    else if(operator == '/')
    {
        result = num1 / num2
    }else
    {
        result = "Invalid Operator"
    }

document.getElementById("show").innerText = (result);
