const containerBox = document.getElementById("container");
const darkBtn = document.querySelector("#dark");
const lightBtn = document.querySelector("#light");

let mode;
document.addEventListener("DOMContentLoaded", () => {
    let ModeResult = localStorage.getItem("mode");
    if(ModeResult === "dark"){
        darkMode();
    }
    else{
        lightMode();
    }
});

function darkMode(){
    containerBox.classList.add("dark");
    containerBox.classList.remove("light");
    mode  = "dark";
    localStorage.setItem("mode",mode);
}

function lightMode(){
    containerBox.classList.add("light");
    containerBox.classList.add("dark");
    mode = "light";
    console.log(mode);
    localStorage.setItem("mode",mode);
}

lightBtn.addEventListener("click",() =>{
    lightMode();
})
darkBtn.addEventListener("click",() =>{
    darkMode()
}); 

