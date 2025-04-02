const questionAnswer = [
  {
    question: "Which is the largest animal on earth?",
    answers: [
      {value: "tiger", correct: false},
      {value: "lion", correct: false},
      {value: "blue whale", correct: true},
      {value: "elephant", correct: false},
    ]    
  },
  
  {
    question: "Which is the largest planet?",
    answers:[
      {value: "saturn", correct: false},
      {value: "neptune", correct: false},
      {value: "uranus", correct: false},
      {value: "jupiter", correct: true},
    ]   
  },

  {
    question: "How many zodiac signs are there?",
    answers:[
    {value: "10", correct: false},
    {value: "2", correct: false},
    {value: "4", correct: false},
    {value: "none of the above", correct: true},]
  },

  {
    question: "How far is the moon from earth?",
    answers:[
    {value: "300,000 Miles", correct: false},
    {value: "150,000 Miles", correct: false},
    {value: "200,000 miles", correct: false},
    {value: "none of the above", correct: true},]
  },
];

const questionElement = document.querySelector(".question");
const answer = document.querySelector(".answer");
const btnNext = document.querySelector(".btnnext");

let currentQuestionIndex = 0;
let score = 0;

function startQuizz() {
  currentQuestionIndex = 0
  score = 0
  btnNext.innerHTML = "Next"
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questionAnswer[currentQuestionIndex];
  questionElement.innerHTML = currentQuestion.question;

  currentQuestion.answers.forEach(answertxt => {
    const answerList = document.createElement("button");
    answerList.innerHTML = answertxt.value;
    answerList.classList.add("btnanswer");
    answer.appendChild(answerList)

    if (answertxt.correct) {
      answerList.dataset.correct = answertxt.correct
    }

answerList.addEventListener("click", (e)=>{
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect) {
    score++;
    selectedBtn.classList.add("correct");
  }
  else {
    selectedBtn.classList.add("wrong");
  }
  Array.from(answer.children).forEach(answerList => {
    if(answerList.dataset.correct == "true") {
      answerList.classList.add("correct");
    }
    answerList.disabled = true;
  })
  btnNext.style.display = "Block"
    })
  })
}

function resetState() {
  btnNext.style.display = "None";
  while(answer.firstChild){
    answer.removeChild(answer.firstChild)
  }
}

btnNext.addEventListener("click", ()=> {
  if(currentQuestionIndex < questionAnswer.length) {
    handleNextButton();
  }
  else {
    startQuizz();
  }
})

function handleNextButton() {
  currentQuestionIndex++
  if(currentQuestionIndex < questionAnswer.length) {
    showQuestion();
  }
  else {
    showScore();
  }
}

function showScore() {
  resetState();
  if (score == questionAnswer.length || score >= questionAnswer.length/2 ) {
  questionElement.innerHTML = `Your Score is Excellent ${score}/${questionAnswer.length} `
}
else {
  questionElement.innerHTML = `Your Score is Weak ${score}/${questionAnswer.length} `
}
  btnNext.innerHTML = "Play Again";
  btnNext.style.display = "block"

}

function saveData() {
  localStorage.setItem("quizzdata", showQuestion());
}

function showData() {
  answer.innerHTML = localStorage.getItem("quizzdata");
}
saveData();
showData();
startQuizz();
