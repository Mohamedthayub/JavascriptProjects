import { cssColorNames } from "./color.js";

const button =  document.querySelector("#button");
const colorCode = document.querySelector("#color-code");
button.addEventListener("click",() => {
    const bodyColor = document.querySelector("#body");
    let randomNumber = cssColorNames[ Math.floor(Math.random() * cssColorNames.length)];
    bodyColor.style.backgroundColor = randomNumber;
    colorCode.textContent = randomNumber;
})