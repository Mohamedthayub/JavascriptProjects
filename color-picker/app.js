let colors = [
  "red",
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "brown",
  "gray",
  "black",
  "white",
  "cyan",
  "magenta",
  "lime",
  "maroon",
  "navy",
  "olive",
  "teal",
  "aqua",
  "silver"
]

window.onload = () => {
  document.body.style.backgroundColor = colors[0];
  colorName.innerText = `backgroundColor is ${colors[0]}`;
}

const button  = document.querySelector("#button");
const  container = document.querySelector(".container");
const colorName = document.querySelector("#heading");

function createText(color){
  colorName.innerText  = `backgroundColor is ${color}`;
}

function  createRandomColor (){
  const rand = Math.floor(Math.random() * colors.length)
  document.body.style.backgroundColor = colors[rand];
  createText(colors[rand]);
}

button.addEventListener("click",() => {
  createRandomColor();
})

