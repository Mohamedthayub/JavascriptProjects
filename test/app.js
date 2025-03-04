const userinput = document.getElementById("input");
const button = document.getElementById("add");
const todoContainer = document.getElementById("todoList");
var todos = [];
window.onload = () => {
    todos = JSON.parse(localStorage.getItem("userinput")) || [];
    todos.forEach(item => addtodo(item));
}
button.addEventListener("click",function(e){
    if(userinput.value === ""){
        alert("this is should be empty")
        e.preventDefault();
    }
    else{
        todos.push(userinput.value);
        addtodo(userinput.value);
        localStorage.setItem("userinput",JSON.stringify(todos));
        userinput.value = '';
    }
});
function addtodo(item){
    const para = document.createElement("p");
    para.innerText = item;
    todoContainer.appendChild(para);
    
    para.addEventListener("click",() => {
        para.style.textDecoration = "line-through";
        removeItem(item);
    })
    para.addEventListener("dblclick", () => {
        todoContainer.removeChild(para);
    })

}

function removeItem(item){
    var index = item.indexOf(item);
    if(index > -1){
        todos.splice(index,1);
    }
    localStorage.setItem("userinput",JSON.stringify(todos));
}