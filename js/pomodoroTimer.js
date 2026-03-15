const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

if (timerDisplay && startBtn && resetBtn) {
  let timer = 25 * 60;
  let interval = null;

  function updateTimerDisplay() {
    const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
    const seconds = String(timer % 60).padStart(2, "0");
    timerDisplay.textContent = `${minutes}:${seconds}`;
  }

  startBtn.addEventListener("click", () => {
    if (!interval) {
      interval = setInterval(() => {
        if (timer > 0) {
          timer--;
          updateTimerDisplay();
        }
      }, 1000);
    }
  });

  resetBtn.addEventListener("click", () => {
    clearInterval(interval);
    interval = null;
    timer = 25 * 60;
    updateTimerDisplay();
  });

  updateTimerDisplay();
}
