const increamentButton = document.querySelector("#increament");
const decreamentButton = document.querySelector("#decreament");
const showImage = document.querySelector("#image");
const images = [
    "/home/thayub/developer/test/slider/images/car1.jpg",
    "/home/thayub/developer/test/slider/images/car2.jpg",
    "/home/thayub/developer/test/slider/images/car3.jpg",
    "/home/thayub/developer/test/slider/images/car4.jpg"

]
let index = 0;


increamentButton.addEventListener("click",() => {
    console.log(index);
    if(index >= images.length){
        console.log(index);     
        index = 0;
        showImage.src = images[index];
        
    }
    else{
        index++;
        showImage.src = images[index];
    }
})

decreamentButton.addEventListener("click", () => {
    index--
    showImage.src = images[index];
})