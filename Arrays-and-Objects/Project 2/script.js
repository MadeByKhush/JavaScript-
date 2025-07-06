function filterEven()
{
    let input = document.getElementById("userinput").value;

    //string to array by using normal traditional functions.
    const numberArray = input.split(",").map(function (item) {
        return parseInt(item);
    })

    //filter out the even number using arrow funtions.
    const filterEven = numberArray.filter(item => (item % 2 === 0));

    //display result
    document.getElementById("output").innerText = filterEven.join(" ,");

}