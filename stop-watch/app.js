const showCount  = document.getElementById("show-count");

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
let count = 0;

let timer = null;
function startTimer() {
    showCount.innerText = count;
    timer  = setInterval(() => {
        count++;
        showCount.innerText = count;
    },1000);
    
}
function stopTimer() {
    if(timer){
        clearInterval(timer);
    }
    timer = null
}

function resetTimer(){
    stopTimer();
    count = 0;
    showCount.innerText = count;
}


startButton.addEventListener("click",startTimer);
stopButton.addEventListener("click",stopTimer);
resetButton.addEventListener("click",resetTimer);