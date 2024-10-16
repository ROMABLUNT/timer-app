const timeInput = document.getElementById('time-input');
const timerDisplay = document.getElementById('timer-display');
let timeValue = +timeInput.value;
let isPause = true;


const startBtn = document.getElementById('start-btn');
const pauseBtn = document.getElementById('pause-btn');
const resetBtn = document.getElementById('reset-btn');

startBtn.addEventListener('click', () => {
    if(isPause) {
        if (timeValue === 0) { 
            timeValue = +timeInput.value; 
        }
        timerDisplay.textContent = timeValue;
        timerInterval = setInterval(countTimer, 1000);
        isPause = false;
    }
});

function countTimer() {
    if(timeValue > 0) {
        timeValue--;
        timerDisplay.textContent = timeValue; 
    } else {
        clearInterval(timerInterval);
        isPause = true;
    }
}

pauseBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    isPause = true;
})

resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerDisplay.textContent = timeInput.value;
    timeValue = timeInput.value;
    isPause = true;
})
