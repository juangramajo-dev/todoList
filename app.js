function addTask() {
    const taskInput = document.getElementById("taskInput")
    const taskText = taskInput.value.trim()


    if (taskText === "") {
        alert("Por favor, ingrese una tarea valida")
        return
    }

    const taskList = document.getElementById("tasks")
    const taskItem = document.createElement("li")
    taskItem.className = "task-item list.group-item d-flex justify-content-beteen align-items-center"
    taskItem.innerHTML = `
<span>${taskText}</span>
<div class="task-actions">
<button class="btn btn-success btn-sm"  onclick = "editTask(this)">Editar</button>
<button class="btn btn-danger btn-sm" onclick="removeTask(this)">Eliminar</button>

</div>
`

    taskList.appendChild(taskItem)

    taskInput.value = ""
}

function removeTask(button) {
    const taskItem = button.parentElement.parentElement
    const taskList = document.getElementById("tasks")
    taskList.removeChild(taskItem)

}

function editTask(button) {
    const taskItem = button.parentElement.parentElement
    const taskTextElement = taskItem.querySelector("span")
    const updatedText = prompt("Editar tarea:", taskTextElement.textContent)


    if (updatedText !== null) {
        taskTextElement.textContent = updatedText
    }
}