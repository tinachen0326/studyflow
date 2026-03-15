// 顯示完成任務數
const completedTasksEl = document.getElementById("completedTasks");
const tasks = loadData("tasks");
if (completedTasksEl) {
  completedTasksEl.textContent = tasks.length;
}
