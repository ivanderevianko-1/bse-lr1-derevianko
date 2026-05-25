// script.js

function addTask() {

    const input = document.getElementById("taskInput");
    const taskText = input.value;

    if (taskText === "") {
        alert("Введіть завдання");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}


// AI generated function
function calculateTasks(tasksCount) {
    return tasksCount * 2;
}

function clearTasks() {

    document.getElementById("taskList").innerHTML = "";
}


console.log(calculateTasks(5));

