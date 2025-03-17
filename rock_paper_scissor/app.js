const choices = document.querySelectorAll(".choice");
let message = document.querySelector("#msg");
let computerScore = document.getElementById("comp-score");
let userScore = document.getElementById("user-score");

let computerPoint = 0;
let userPoint = 0;


function genComputerChoice(){
    let compChoice = ["rock","paper","scissor"];
    let rand = Math.floor(Math.random() *3);
    return compChoice[rand];
}
// function  showWinner(winningMessage,userChoice,computerChoice){
//     if(winningMessage){
//         message.innerText =`winner is computer ${computerChoice}`;
//     }
//     else{
//         message.innerText = `winner is user ${userChoice}`;
//     }

// }
function showWinner(winner){
    if(winner){
        console.log("winner is ",winner);
    }
    else{
        console.log("winner is ",winner);
    }
   
}
function  checkWinner(userChoice){
    let computerChoice = genComputerChoice();
    if(userChoice == computerChoice){
        alert("match draw");
    }
    else{
        let winningMessage = true;
        if(userChoice == "rock"){
            winningMessage = computerChoice == "paper" ? false : true;
        }
        else if (userChoice == "paper"){
            winningMessage = computerChoice == "scissor" ? false : true;
        }
        else{
            winningMessage = computerChoice == "rock" ? false : true;
        }
        showWinner(winningMessage);
    }
    // showWinner(userChoice,computerChoice,winningMessage);
}

choices.forEach(box => {
    box.addEventListener("click",() => {
        let userChoice = box.getAttribute("id");
        checkWinner(userChoice);
    })
})