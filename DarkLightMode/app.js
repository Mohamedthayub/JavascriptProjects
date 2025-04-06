let themeMode = document.getElementById("mode")
let image = document.getElementById("img");
let heading = document.getElementById("head");
let changeBtn = document.querySelector("#themeChangeBtn");


changeBtn.addEventListener("click",function(){
    if(themeMode.textContent == "Dark Mode" || image.src == "./assets/icon-moon.svg"){
        image.src = "./assets/icon-sun.svg";
        themeMode.innerText = "Light Mode";
        document.body.classList.add("dark");
        heading.style.color = "white";
        themeMode.style.color = "white";
    }
    else{
        image.src = "./assets/icon-moon.svg";
        themeMode.innerText = "Dark Mode";
        document.body.classList.remove("dark");
        heading.style.color = "black";
        themeMode.style.color = "black";

    }
})

