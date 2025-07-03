const counterResult = document.querySelector("#result");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");
const clickCountsResult = document.querySelector("#clickcount");
const countHistory = document.querySelector(".count-history");
let count = 0; 
let countClick = 0;
let clickCounts = [];

function addClickCount(count){
    if(clickCounts.length >  10){
        clickCounts.shift();
    }
    else{
        clickCounts.push(count);
        clickCounts.forEach((item) => {
            const para = document.createElement("p");
            para.innerText = item;
            countHistory.appendChild(para);
        })
    }
}
// let countClicks = [];
increaseBtn.addEventListener("click",() => {
    count += 1;
    counterResult.innerText = `Count is : ${count}`
    countClick++
    clickCountsResult.innerText = `click counts : ${countClick}`
    addClickCount(countClick);
})
decreaseBtn.addEventListener("click",() => {
    count -= 1
    counterResult.innerText = `Count is : ${count}`
    countClick++;
    clickCountsResult.innerText =  `click counts : ${countClick}`;
    addClickCount(countClick);
})
resetButton.addEventListener("click",() =>{
    count = 0;
    counterResult.innerText = `Count is : ${count}`;
    countClick++;
    clickCountsResult.innerText  =  `click counts : ${countClick}`
     addClickCount(countClick);
});