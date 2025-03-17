const boxes = document.querySelectorAll(".box");
const msgContainer = document.querySelector(".msg-container");
const newGameBtn = document.querySelector("#new-btn");
const winnerMsg = document.querySelector("#msg");
const resetGame = document.querySelector("#reset-btn");
let turn = true;
const winningPatterns = [
    [0,1,2], 
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let count  = 0;
boxes.forEach(box  => {
    box.addEventListener("click",() => {
        if(turn){
            box.innerText = "O";
            turn = false;
        }
        else{
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
        count++;
        if(count == 9){
            drawMatch();
        }
    })

})
function drawMatch(){
    msgContainer.classList.remove("hide")
    winnerMsg.innerText = `Match Draw`;
    
}
function newGame(){
    turn = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
function enableBoxes(){
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        count = 0;
    }
}
function disableBoxes(){
    for(let box of boxes){
        box.disabled = true;
    }
}
function showWinner(winner){
    winnerMsg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

}
function checkWinner(){
    for(let pattern  of winningPatterns){
        let position1 = boxes[pattern[0]].innerText;
        let position2 =  boxes[pattern[1]].innerText;
        let position3 =  boxes[pattern[2]].innerText;
        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 == position2 && position2 == position3){
                showWinner(position1);
            }
        }
    }
}
resetGame.addEventListener("click",() => {
    enableBoxes();
});
newGameBtn.addEventListener("click",() => {
    newGame()
})