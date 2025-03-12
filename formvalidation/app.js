const usernameError = document.getElementById("name-error");
const userphoneError = document.getElementById("phone-error");
const useremailError = document.getElementById("email-error");
const usersubmitError = document.getElementById("submit-error");
const userSubmitbtn = document.getElementById("submit-btn");
function validateUsername(){
    let userName = document.getElementById("username").value;
    if(userName.length === 0){
        usernameError.innerText = "it should not be empty";
        return false;
    }
    if(!isNaN(userName)){
        usernameError.innerText = "it should not be number";
        return false; 
    }
    if(userName.length < 5){
        usernameError.innerText = "Username must be at least 5 character";
        return false;
    }
    if(/^[^a-zA-Z0-9]+$/.test(userName)){
        usernameError.innerText = "username should not only special character $#$#";
        return false;
    }
    if(/\s/.test(userName)){
        usernameError.innerText = "username should not have spaces";
        return false;
    }
    usernameError.innerHTML = `<i class="fa-solid fa-check"></i>`;
    return true;
}
function validatephonenumber(){
    let userNumber = document.getElementById("userphone").value;
    if(userNumber.length == 0){
        userphoneError.innerText = "it should not be empty";
        return false;
    }
    if(userNumber.length < 10){
        userphoneError.innerText = "number must be 10 digits";
        return false;
    }
    if(!/^\d+$/.test(userNumber)){
        userphoneError.innerText  = "phone number should contain digits";
        return false;
    }
    userphoneError.innerHTML = `<i class="fa-solid fa-check"></i>`;
    return true;
}
function validateEmail(){
    let userEmail = document.getElementById("useremail").value;
    if(userEmail.length == 0){
        useremailError.innerText  = "it should not be empty";
        return false;
    }
    if(!/^[^A-Z]/.test(userEmail)){
        useremailError.innerText = "the first character should not be capital";
        return false;
    }
    if(/\s/.test(userEmail)){
        useremailError.innerText = "should not have any empty spaces in email";
        return false;
    }
    if(!/@/.test(userEmail)){
        useremailError.innerText = "@ symbold is missing";
        return false;
    }
    if(!/@gmail\.com$/.test(userEmail)){
        useremailError.innerText = "gmail or .com is missing";
        return false;
    }
    useremailError.innerHTML = `<i class="fa-solid fa-check"></i>`;
    return true;


}
userSubmitbtn.addEventListener("click",function(e){
    if(!validateUsername() || !validatephonenumber() || !validateEmail()){
        e.preventDefault();
    }
    else{
        alert("Successfully logged in");
    }
})
