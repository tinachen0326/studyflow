let time = 1500;

function startTimer() {
  const timer = setInterval(() => {
    time--;

    document.getElementById("timer").textContent = time;

    if (time <= 0) {
      clearInterval(timer);
      alert("時間到");
    }
  }, 1000);
}
