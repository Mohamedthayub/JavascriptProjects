const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const useremailError = document.getElementById("emailerror");
const userpasswordError = document.getElementById("passerror");
const loginBtn = document.getElementById("loginbtn");

function validateEmail(email) {
    if (email === "") {
        useremailError.textContent = "It should not be empty";
        return false;
    }
    const emailregex =  /^[a-z][a-z0-9._%+-]*@gmail\.com$/;
    if (!emailregex.test(email)) {
        useremailError.textContent = "Invalid email";
        return false;
    }
    useremailError.textContent = "";
    userEmail.value =""
    return email;
}

function validatePassword(password) {
    if (password === "") {
        userpasswordError.textContent = "It should not be empty";
        return false;
    }
    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;'"<>?,.\/]).{8,}$/;
    if (!passwordregex.test(password)) {
        userpasswordError.textContent = "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and be at least 8 characters long";
        return false;
    }
    userpasswordError.textContent = "";
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