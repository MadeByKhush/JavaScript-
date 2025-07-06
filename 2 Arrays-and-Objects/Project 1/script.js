function addtask() {
    let input = document.getElementById("taskinput").value.trim();

    if (input !== "") {
        let li = document.createElement("li");
        li.textContent = input;
        document.getElementById("tasklist").appendChild(li);
        input.value = "";
    }
}























































// const addbtn = document.getElementById("btn");
// const taskinput = document.getElementById("task-text");
// const taskList = document.querySelector(".task-list");

// const task = [];

// addbtn.addEventListener("click", function () {
//     const tasktext = taskinput.value.trim();

//     if (tasktext !== "") {
//         task.push(tasktext);
//         displayTasks();
//         taskinput.value = "";
//     }
// });

// function displayTasks() {
//     taskList.innerHTML = "";

//     task.forEach(function (task) {
//         const li = document.createElement("li");
//         li.textContent = task;
//         li.classList.add("list-box");
//         taskList.appendChild(li);
//     });
// }