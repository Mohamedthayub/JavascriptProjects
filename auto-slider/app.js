
const showImage = document.querySelector(".image");
const car_images = [
    "./images/car1.jpg",
   "./images/car2.jpg",
   "./images/car3.jpg",
   "./images/car4.jpg",
   "./images/car5.jpg"
]

let index = 0;

function changeImage(){
    index = (index + 1) % car_images.length;
    showImage.src = car_images[index];
}
setInterval(changeImage,5000);
