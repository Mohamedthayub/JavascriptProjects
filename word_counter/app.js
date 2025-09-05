const userInput = document.getElementById("userinput");
const wordCount = document.getElementById("wordCount");
const characterCount = document.getElementById("characterCount");
const resetBtn = document.getElementById("reset-btn");
function countWord(word){
    if(!word.trim()){
      wordCount.innerText = `Word count is : 0`;
    }
    else{
      let result = word.trim().split(/\s+/);
      wordCount.innerText = `word count is :  ${result.length}`;
    }
}

function  countCharacter(){
    const text  = userInput.value;
    characterCount.innerText = `character Count is : ${text.length}`;  
    countWord(text); 
}


function clearInputs(){
  document.getElementById("userinput").value  = "";
  wordCount.innerText = "Word count is  : 0";
  characterCount.innerText = "Character count is : 0";  
}

resetBtn.addEventListener("click",clearInputs);
