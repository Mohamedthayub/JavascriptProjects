const loginBtn = document.querySelector("#btn");
let password = "Thayub@#$123";
let email = "thayub@gmail.com";


function showToast(message){
    const toast = document.querySelector("#result");
    if(toast){
     setTimeout(() => {
            toast.innerText = message;
             clearInput();
    },2000) 
    }
    
}
function clearInput(){
    document.querySelector("#email").value = "";
    document.querySelector("#password").value = "";
}
loginBtn.addEventListener("click",(e) => {
    e.preventDefault();
    let userEmail = document.querySelector("#email").value;
    let userPassword  = document.querySelector("#password").value;

    if(!userEmail ||  !userPassword){
        showToast("Please enter both field");
        
    }

    if(userEmail == email && userPassword == password){
        showToast("login Success");
        
    }
    else{
        alert("login fail");
    }
  
})