const counterResult = document.querySelector("#result");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");
const clickCountsResult = document.querySelector("#clickcount");
let count = 0; 

let countClick = 0;
// let countClicks = [];
increaseBtn.addEventListener("click",() => {
    count += 1;
    counterResult.innerText = `Count is : ${count}`
    countClick++
    clickCountsResult.innerText = `click counts : ${countClick}`
})
decreaseBtn.addEventListener("click",() => {
    count -= 1
    counterResult.innerText = `Count is : ${count}`
    countClick++;
    clickCountsResult.innerText =  `click counts : ${countClick}`
})
resetButton.addEventListener("click",() =>{
    count = 0;
    counterResult.innerText = `Count is : ${count}`;
    countClick++;
    clickCountsResult.innerText  =  `click counts : ${countClick}`
});