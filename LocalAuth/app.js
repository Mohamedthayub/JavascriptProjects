const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const userEmailError = document.getElementById("emailerror");
const userPasswordError = document.getElementById("passerror");
const loginBtn = document.getElementById("loginbtn");

function validateEmail(email) {
    if (email === "") {
        userEmailError.textContent = "It should not be empty";
        return false;
    }
    const emailRegex =  /^[a-z][a-z0-9._%+-]*@gmail\.com$/;
    if (!emailRegex.test(email)) {
        userEmailError.textContent = "Invalid email";
        return false;
    }
    userEmailError.textContent = "";
    userEmail.value =""
    return email;
}

function validatePassword(password) {
    if (password === "") {
        userPasswordError.textContent = "It should not be empty";
        return false;
    }
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;'"<>?,.\/]).{8,}$/;
    if (!passwordregex.test(password)) {
        userPasswordError.textContent = "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long";
        return false;
    }
    userPasswordError.textContent = "";
    userPassword.value = "";
    return password;

}

userDatas  = JSON.parse(localStorage.getItem("useremail-password")) || [];
loginBtn.addEventListener("click", function (e) {
    e.preventDefault(); // Prevent form submission before validation
    const Email = validateEmail(userEmail.value.trim()); 
    const Password = validatePassword(userPassword.value.trim());
    userDatas.push({Email,Password});
    localStorage.setItem("useremail-password",JSON.stringify(userDatas));
    alert("successfully stored in localstorage");
});