const noteContainer = document.querySelector(".notes-container");
const button = document.querySelector(".btn");
let notes =  document.querySelectorAll(".input-box");
function  update(){
    localStorage.setItem("note",noteContainer.innerHTML);
}
function show(){
    noteContainer.innerHTML = localStorage.getItem("note") || "" ;
}
show();
button.addEventListener("click",function(){
    let para =  document.createElement("p");
    let image = document.createElement("img");
    para.className = "input-box";
    image.src = "assets/images/delete.png";
    para.setAttribute("contenteditable","true");
    noteContainer.appendChild(para).appendChild(image);
    update();
})

noteContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        update();
    }
    else if (e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){
                update();
            }
        })
    }
})

