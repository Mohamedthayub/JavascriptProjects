const increamentButton = document.querySelector("#increament");
const decreamentButton = document.querySelector("#decreament");
const randomImage = document.querySelector("#random");
const showImage = document.querySelector("#image");
const images = [
    "images/car1.jpg",
    "images/car2.jpg",
    "images/car3.jpg",
    "images/car4.jpg"
]
let index = 0;

increamentButton.addEventListener("click",() => {
    index++;
    if(index > images.length - 1){
        index = images.length - 1;
    }
    showImage.src = images[index];
})
decreamentButton.addEventListener("click",() => {
    index--;
    if(index < 1){
        index = 0;
    }
    showImage.src = images[index];
})
randomImage.addEventListener("click",() => {
    const rand = Math.floor(Math.random() * images.length);
    showImage.src  = images[rand];
})