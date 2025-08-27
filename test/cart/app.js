const cart_icon = document.querySelector(".cart-icon");
const cartContianer = document.querySelector(".cart");


cart_icon.addEventListener("click",() => {
    cartContianer.classList.toggle("show")
})

