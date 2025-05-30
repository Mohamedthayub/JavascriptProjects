const btn = document.querySelector("#add-btn");
const optionContainer = document.querySelector("#select-container");

btn.addEventListener("click", (e) => {
    let userInput = document.querySelector("#userinput")
    if(userInput.value == ""){
        alert("it should not be empty");
        e.prenventDefault();
        
    }
   optionCreate(userInput.value)
   clearInputs(userInput);

});

function optionCreate(item) {
    const option = document.createElement("option");
    option.value = item;
    option.textContent = item;
    optionContainer.appendChild(option);
    saveData();
}


function clearInputs(userInput){
    userInput.value = "";
}

function saveData (){
    localStorage.setItem("data",optionContainer.innerHTML);
}

window.onload = () =>{
    optionContainer.innerHTML = localStorage.getItem("data");
}