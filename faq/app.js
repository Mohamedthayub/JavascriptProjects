
let containers = document.querySelectorAll(".cont");
let buttons = document.querySelectorAll(".btn");

buttons.forEach((item) => {
    item.addEventListener("click", () => {
        if(item.parentElement.parentElement.children[1]){
            item.parentElement.parentElement.children[1].classList.toggle("hide");
        }
    })
})
