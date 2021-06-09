// variables to manipulate the DOM elements. 

var btnStartEl = document.getElementById("btn-start");
var timeLeftEl = document.getElementById("time-left");
var stContEl = document.getElementById("start-container");
var scoreEl = document.getElementById("score");

// variables to control logic state of the quiz
var quizQuestionIndex = {}
var answer = true;
var timer = 75
var score = 0
var penalty = 5
var max_Questions



//function beginQuiz() {
// Hide start container
//stContEl.setAttribute("class", disappear) 
//}

//btnStartEl.onclick="beginQuiz()";

// This starts the timer 
btnStartEl.addEventListener('click', function() {

  var startTimer = setInterval(function() {
      timer--;
      timeLeftEl.textContent = timer;
      if(timer === 0) {
        clearInterval(startTimer);
      }
  },1000);

  startQuiz();

});

function startQuiz() {
  quizQuestionCount = 0
  availableQuestons = [quizQuestions]
  getNewQuizQuestion()
}

function getNewQuizQuestion() {
  if(availableQuestons.length === 0 || quizQuestioncount > max_Questions) {
    localStorage.setItem('mostRecentScore', score)

    return window.location.assign('/end.html')
  }

  var quizQuestionIndex = Math.floor(Math.random() * availableQuestons.length)
  currentQuestion = availableQuestons[quizQuestionIndex]
  quizQuestions.innerText = currentQuestion.quizQuestions



choices.forEach(choice => {
  choice.addEventListener('click', e => {
    if(!acceptingAnswers) return

    acceptingAnswers = false
    var selectedChoice = e.target
    var selectedAnswer = selectedChoice.dataset['number']

    var classToApply = selectedAnswer == currentQuestion.answer ? 'correct' :
    'incorrect'

    if (classToApply === 'correct') {
      incrementScore(score)
    }

    selectedChoice.parentElement.classList.add(classToApply)
    
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply)
      getNewQuizQuestion()

    }, 1000)
  })
})




// function nextQuestion() {
//   questionTitle.textContent = questions[questionIndex].question;
//   choiceA.textContent = questions[questionIndex].choices[0];
//   choiceB.textContent = questions[questionIndex].choices[1];
//   choiceC.textContent = questions[questionIndex].choices[2];
//   choiceD.textContent = questions[questionIndex].choices[3];
// }








/*function startQuiz() {
console.log('startingloop');
  for(var i = 0; i < quizQuestions.length; i++ ){
    var response = ('quizQestions.answer');
    if(response == quizQuestions[i].answer){
      score ++;
      ('Correct')
    } else {
      ('Incorrect')
    }
  }
}*/
