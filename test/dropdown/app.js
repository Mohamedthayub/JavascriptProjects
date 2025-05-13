let container = document.getElementById("cars");


let names = ["maruthi", "mg","audi","bmw","bugati"];

names.forEach(item => {
    let option = document.createElement("option");
    option.textContent = item;
    option.value = item;
    container.appendChild(option);
})