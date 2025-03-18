let hour  = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");
let ampm  = document.querySelector("#ampm");

setInterval(showTime,1000)
function  showTime(){
    let dates = new Date();
    let hours  = dates.getHours();
    let minutes = dates.getMinutes();
    let seconds = dates.getSeconds();
    if(hours > 12){
        if (hours >= 12){
            hours -= 12;
            ampm.innerText = "AM";
        }
        else if(hours == 0){
            hours = 12;
            ampm.innerText = "PM";
        }
    }
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes <  10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    hour.innerText = hours;
    minute.innerText = minutes;
    second.innerText = seconds;
}