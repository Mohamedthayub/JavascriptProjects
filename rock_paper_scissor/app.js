let choices = document.querySelectorAll(".choice");
let userScore = document.querySelector("#user-score");
let computerScore = document.querySelector("#comp-score");
let message = document.querySelector("#msg");

let userPoint = 0;
let computerPoint = 0;
function genComputer(){
    let choice = ["rock","paper","scissor"];
    let rand = Math.floor(Math.random() * 3);
    return choice[rand];
}
function showWinner(userWin,userchoice,computerChoice){
if(userWin){
    message.innerText = `user wins ${userchoice} beats ${computerChoice}`;
    message.style.backgroundColor = "green";
    userPoint++;
    userScore.innerText = userPoint;
}
else{
    message.innerText =  `computer wins ${computerChoice} beats ${userchoice}`;
    message.style.backgroundColor = "red";
    computerPoint++;
    computerScore.innerText = computerPoint;
}
}
function MatchDraw(){
    message.innerText = `Match is Draw `;
    message.style.backgroundColor = "yellow";

}
function checkWinner(userchoice){
    let computerChoice = genComputer();
    if(userchoice == computerChoice){
        MatchDraw();
    }
    else{
        let userWin = true;
        if(userchoice == "rock"){
            userWin = computerChoice == "paper"  ? false : true;
        }
        else if(userchoice == "paper"){
            userWin = computerChoice == "scissor" ? false : true;
        }
        else{
            userWin = computerChoice == "rock" ? false : true;
        }
        showWinner(userWin,userchoice,computerChoice);
    }
   
}
choices.forEach(box => {
    box.addEventListener("click",() => {
        let user = box.getAttribute("id");
        checkWinner(user);
    })
})

