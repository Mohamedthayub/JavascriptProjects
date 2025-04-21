let minutes = document.querySelector("#minute");
let seconds = document.querySelector("#second");
let hours = document.querySelector("#hour");
let start = document.querySelector("#start");
let reset = document.querySelector("#reset");
let second= 0;
let minute = 0;
let hour = 0;
let setsecond = setInterval(() => {
    second++;
    if(second < 10) {
        seconds.innerText ="0" + second;
    }
    else{
        seconds.innerText = second;
    }

    if(second  >= 60){
        second = 0;
        setminute();  
    } 
},1000);
function setminute(){
        minute++;
        if(minute < 10){
            minutes.innerText = "0" + minute;
        }
        else{
            minutes.innerText = minute;
        }
        if(minute >= 59){
            minute  = 0;
            sethour();
        }
}
function sethour(){
        hour++;
        if(hour < 10){
            hours.innerText = "0" + hour;
        }
        else{
            hours.innerText = hour;
        }
}
start.addEventListener("click",() =>{
    setsecond();
})
