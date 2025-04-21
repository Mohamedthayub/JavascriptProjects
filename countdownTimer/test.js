let interval = setInterval(() => {
    console.log("Running..");
},1000);

setTimeout(() => {
    clearInterval(interval)
},9000);
