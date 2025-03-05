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
    return true;
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
    return true;
}

loginBtn.addEventListener("click", function (e) {
    const isEmail = validateEmail(userEmail.value.trim()); // Trim email input
    const isPassword = validatePassword(userPassword.value.trim()); // Trim password input

    // Prevent form submission if either email or password is invalid
    if (!isEmail || !isPassword) {
        e.preventDefault();
    }
    

});