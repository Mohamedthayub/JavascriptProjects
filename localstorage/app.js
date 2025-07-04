
        const addData = document.querySelector("#add-data");
        const deleteData = document.querySelector("#dlt-data");
        const showData = document.querySelector("#show-data");
        const dataContainer = document.querySelector(".data-container");
        let name = ["mohamed","mohidee","thayub","nadheem"];
        function createItem(data){
            let personName  = document.createElement("p");
            personName.innerText = data;
            dataContainer.appendChild(personName);
        }
        addData.addEventListener("click",() => {
            localStorage.setItem("item",JSON.stringify(name));
        })
        showData.addEventListener("click",() => {
            let newData = localStorage.getItem("item");
            name = newData ? JSON.parse(newData) : [];
            name.forEach((item) => {
                createItem(item)
            })
            console.log("it is working well ... ")
        })
        deleteData.addEventListener("click",() => {
            localStorage.removeItem("item");
        })
        window.onload = () => {
            try{
                newData.forEach((data) => {
                    createItem(data);
                })
            }
            catch(err){
                console.log(err.message);
            }
        }