const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    if(button.textContent === "Login"){
        button.textContent = "Logout";
        button.style.backgroundColor = "red";
    }
    else{
        button.textContent = "Login";
        button.style.backgroundColor = "green";
    }
})