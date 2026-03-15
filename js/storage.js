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
