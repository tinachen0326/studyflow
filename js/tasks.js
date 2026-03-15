function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
  ${taskText}
  <button onclick="deleteTask(this)">刪除</button>
  `;

  const list = document.getElementById("taskList");
  list.appendChild(li);

  input.value = "";

  saveTasks();
}

function deleteTask(button) {
  const li = button.parentElement;
  li.remove();

  saveTasks();
}
