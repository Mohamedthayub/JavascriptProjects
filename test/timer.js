let Name = "thayub";
let timer = null;
let count = 0;
function check(){
    if(count == 5){
        clearInterval(timer)
    }
}

function start() {
    timer = setInterval(() => {
        console.log(`my name is ${Name}`);
        count++;
        check();
    },1000);
}

start();