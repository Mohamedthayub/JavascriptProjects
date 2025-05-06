const usernameError = document.getElementById("name-error");
const userphoneError = document.getElementById("phone-error");
const useremailError = document.getElementById("email-error");
const usersubmitError = document.getElementById("submit-error");
const userSubmitbtn = document.getElementById("submit-btn");

function validateUsername() {
    let userName = document.getElementById("username").value.trim();
    
    if (userName.length === 0) {
        usernameError.innerText = "It should not be empty";
        return false;
    }
    if (!isNaN(userName)) {
        usernameError.innerText = "It should not be a number";
        return false; 
    }
    if (userName.length < 5) {
        usernameError.innerText = "Username must be at least 5 characters";
        return false;
    }
    if (/^[^a-zA-Z0-9]+$/.test(userName)) {
        usernameError.innerText = "Username should not contain only special characters";
        return false;
    }
    if (/\s/.test(userName)) {
        usernameError.innerText = "Username should not have spaces";
        return false;
    }

    usernameError.innerHTML = `<i class="fa-solid fa-check"></i>`;
    return true;
}

function validatephonenumber() {
    let userNumber = document.getElementById("userphone").value.trim();
    
    if (userNumber.length === 0) {
        userphoneError.innerText = "It should not be empty";
        return false;
    }
    if (userNumber.length !== 10) {
        userphoneError.innerText = "Number must be exactly 10 digits";
        return false;
    }
    if (!/^\d+$/.test(userNumber)) {
        userphoneError.innerText = "Only numbers are allowed, no spaces or special characters";
        userphoneError.style.fontSize = "12px";
        userphoneError.style.marginLeft = "25px";
        return false;
    }

    userphoneError.innerHTML = `<i class="fa-solid fa-check"></i>`;
    return true;
}

function validateEmail() {
    let userEmail = document.getElementById("useremail").value.trim();
    
    if (userEmail.length === 0) {
        useremailError.innerText = "It should not be empty";
        return false;
    }
    if (!/^[a-z]/.test(userEmail)) {
        useremailError.innerText = "The first character should not be capital";
        return false;
    }
    if (/\s/.test(userEmail)) {
        useremailError.innerText = "Email should not contain spaces";
        return false;
    }
    if (!/@/.test(userEmail)) {
        useremailError.innerText = "@ symbol is missing";
        return false;
    }
    if (!/^[a-z0-9._%+-]+@gmail\.com$/.test(userEmail)) {
        useremailError.innerText = "Email must be a Gmail account with @gmail.com";
        return false;
    }

    useremailError.innerHTML = `<i class="fa-solid fa-check"></i>`;
    return true;
}

userSubmitbtn.addEventListener("click", function(e) {
    if (!validateUsername() || !validatephonenumber() || !validateEmail()) {
        e.preventDefault();
    } else {
        alert("Successfully logged in");
    }
});
