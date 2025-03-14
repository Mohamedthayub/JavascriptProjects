const  questions = [
    {
     question: "Which is largest animal in the world ?" ,
     answers : [
        {text : "shark", correct : false},
        {text : "blue whale", correct :true},
        {text : "elephant", correct : false},
        {text : "Giraffe", correct : false},
     ]

    }, 
    {
        question: "Which is smallest country in the world ?",
        answers : [     
           {text : "vatican", correct : true},
           {text : "Bhutan", correct  : false},
           {text : "Nepal", correct : false},
           {text : "Shri Lanka", correct : false},
        ]
    },
    {
        question : "Which is the largest desert in the world ?",

        answers : [
            {text : "Kalahari", correct : false},
            {text : "Gobi" , correct : false},
            {text : "Sahara", correct : false},
            {text : "Antarctica", correct : true}
        ]
    },
    {
        question : "Which is the smallest continent in the world ? ",
        answers : [
            {text : "Asia" ,correct : false},
            {text : "Australia" ,correct : true},
            {text : "Artic" ,correct : false},
            {text : "Africa" ,correct : false},
        ]
    }
]

const quesTion = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
let currenIndex = 0;
let score = 0;
function startQuiz(){
    currenIndex = 0;
    score = 0;
    nextBtn.innerText = "Next";
    startGame();
}
function startGame(){
    resetState();
    let askingQuestion = questions[currenIndex].question;
    let questionNumber = currenIndex + 1 ;
    quesTion.innerText  = questionNumber + "." + askingQuestion;
    let currentQuestion = questions[currenIndex];
    currentQuestion.answers.forEach(item => {
    let data = item.text;

    const button = document.createElement("button");
    button.innerText = data;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(item.correct){
        button.dataset.correct = item.correct;
    }
    button.addEventListener("click",selectAnswer);
   })
}
function resetState(){
    nextBtn.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    let selectedBtn = e.target;
    let iscorrect = selectedBtn.dataset.correct === "true";
    if(iscorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextBtn.style.display = "block";
}

function showResult() {
    resetState();
    let name = `your score is ${score} and ${questions.length}`;
    quesTion.innerText  = name;
    nextBtn.style.display = "block";
}

function handleNextbutton(){
    currenIndex++;
    if(currenIndex < questions.length){
        startGame();
    }
    else{
        showResult()
    }
}
nextBtn.addEventListener("click",() => {
    if(currenIndex < questions.length){
        handleNextbutton();
    }
    else{
        startQuiz()
    }
})

startQuiz();