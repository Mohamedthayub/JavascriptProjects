const container = document.querySelector(".text-container");
const addItem = document.getElementById("additem");

addItem.addEventListener("click",function(){
    let  paraContainer = document.createElement("p");
    let image = document.createElement("img");
    image.src = "assets/images/delete.png";
    image.className = "logo";
    paraContainer.classList.add("input-container");
    paraContainer.setAttribute("contenteditable","true")
    container.appendChild(paraContainer).appendChild(image);
})
container.addEventListener("click",function(e){
    if(e.target.tagName  == "IMG"){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName === "p"){
        
    }
})
function updateStorage(){
    localStorage.setItem("notes",container.innerHTML);
}