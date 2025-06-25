function generate()
{
    let num = document.getElementById("number").value;
    let result= "";

    for(let i = 1; i<=10; i++)
    {
        result += `${num*i} \n`;
    }
     document.getElementById("output").innerText = result;
}   