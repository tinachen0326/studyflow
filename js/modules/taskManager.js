const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = loadData("tasks");

function renderTasks() {
  if (!taskList) return;

  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.textContent = task;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "刪除";

    deleteBtn.onclick = () => {
      tasks.splice(index, 1);
      saveData("tasks", tasks);
      renderTasks();
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

if (addTaskBtn && taskInput) {
  addTaskBtn.addEventListener("click", () => {
    if (taskInput.value.trim() !== "") {
      tasks.push(taskInput.value.trim());
      taskInput.value = "";

      saveData("tasks", tasks);
      renderTasks();
    }
  });
}

renderTasks();
