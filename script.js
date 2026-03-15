function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    ${taskText}
    <button onclick="deleteTask(this)">刪除</button>
  `;

  document.getElementById("taskList").appendChild(li);

  input.value = "";

  saveTasks();
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();

  saveTasks();
}

function saveTasks() {
  const tasks = [];

  document.querySelectorAll("#taskList li").forEach((li) => {
    tasks.push(li.firstChild.textContent);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    const li = document.createElement("li");

    li.innerHTML = `
      ${task}
      <button onclick="deleteTask(this)">刪除</button>
    `;

    document.getElementById("taskList").appendChild(li);
  });
}

loadTasks();
