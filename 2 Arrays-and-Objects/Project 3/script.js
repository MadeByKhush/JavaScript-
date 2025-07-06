function showList() {
    let input = document.getElementById("userinput").value;

    let filterList = input.split(",");

    let list = document.getElementById("listItems")
    list.innerHTML = "";
    
    filterList.forEach(function (item) {
        let li = document.createElement("li");
        li.innerText = item.trim();
        list.appendChild(li);
    })
}