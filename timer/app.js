const showNumber = document.querySelector("#show");
const startBtn = document.querySelector("#strt");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");
let count = 0;
let timer = null;
function startTimer(){
    if(timer){
        clearInterval(timer);
    }
    showNumber.innerText = count;

    timer = setInterval(() => {
        count++;
        showNumber.innerText = count;
    },1000);
    startBtn.disabled = true;
}
function stop(){
   if(timer){
    clearInterval(timer);
    timer = null;
    startBtn.disabled = true;
   }
}
function reset(){
 stop();
 count = 0; 
 showNumber.innerText = count;
startBtn.disabled = false;
}
startBtn.addEventListener("click",startTimer);
stopBtn.addEventListener("click",stop);
resetBtn.addEventListener("click",reset);

