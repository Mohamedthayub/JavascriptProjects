const counterResult = document.querySelector("#result");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const resetButton = document.querySelector("#reset");
const clickCountsResult = document.querySelector("#clickcount");
const countHistory = document.querySelector(".count-history");
const historyButton = document.querySelector("#history-btn");
const clearhistroyButton = document.querySelector("#clear-history-btn");
let count = 0; 
let countClick = 0;
let clickCounts = [];
window.onload = () => {
    getData();
}
clearhistroyButton.addEventListener("click",() => {
    localStorage.removeItem("counts");
})
function getData(){
    clickCounts = JSON.parse(localStorage.getItem("counts")) || [];
    clickCounts.forEach((history) => createHistory(history));
}
function addClickCount(count){
    if(clickCounts.length >=  10){
        clickCounts.shift();
    }
    clickCounts.push(count);
    localStorage.setItem("counts" ,JSON.stringify(clickCounts));
}
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

function createHistory(item){
    const para = document.createElement("p");
    para.innerText = item;
    countHistory.appendChild(para);
}
historyButton.addEventListener("click",getData);