const userDayInput  = document.getElementById("day");
const userMonthInput = document.getElementById("month");
const userYearInput = document.getElementById("year");
const button = document.getElementById("btn");
const showYear = document.getElementById("showyear");
const showMonth = document.getElementById("monthh1");
const showDay = document.getElementById("showday");
// console.log(date);
button.addEventListener("click",function(e){
    if(userDayInput.value == "" || userMonthInput.value == "" || userYearInput.value == ""){
        alert("it should not  be empty");
        e.preventDefault();
    }
    else{
        calculateAge(userDayInput.value,userMonthInput.value,userYearInput.value);
        userDayInput.value = "";
        userMonthInput.value = "";
        userYearInput.value = "";
    }
})
function calculateAge(birthdate, birthmonth, birthyear) {
    let dates = new Date();
    let day = dates.getDate();
    let month = dates.getMonth() + 1; 
    let year = dates.getFullYear();

    let userMonth = month - birthmonth;
    let userDate = day - birthdate;
    let userYear = year - birthyear;

    if (userDate < 0) {
        userMonth -= 1;  
        let previousMonthDays = new Date(year, month - 1, 0).getDate(); 
        userDate += previousMonthDays;
    }

    if (userMonth < 0) {
        userYear -= 1;  
        userMonth += 12;
    }

    showDay.innerText = userDate;
    showMonth.innerText = userMonth;
    showYear.innerText = userYear;
}

