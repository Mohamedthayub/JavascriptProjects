const userInput = document.getElementById("userinput");
const word_count = document.getElementById("wordCount");
const character_count = document.getElementById("characterCount");
const resetBtn = document.getElementById("reset-btn");
function countWord(word){
    if(word.length == 0){
      word_count.innerText = `Word count is : 0`;
    }
    else{
      let result  = word.split(" ");
      word_count.innerText = `word count is :  ${result.length}`;
    }
}

function  countcharacter(){
    let str = "";
    const uservalue = userInput.value;
    str = uservalue + str;
    character_count.innerText = `character Count is : ${str.length}`;  
    countWord(uservalue); 
}


function clearInputs(){
  document.getElementById("userinput").value  = "";
}

resetBtn.addEventListener("click",clearInputs);
