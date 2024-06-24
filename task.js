function startCountdown(seconds) {
    let timer = seconds;
    const timerDisplay = document.getElementById("timer")
    
    function updateTimer() {
        if (timer > 0) {
            timer--;
            timerDisplay.textContent = timer;
        } else {
            clearInterval(intervalID);
            alert('Вы победили в конкурсе!');
        }
    }
    const intervalID = setInterval(updateTimer, 1000);
}
startCountdown(30);