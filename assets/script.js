var questionCounter = 0;
var timeLeft = 75;
var timerInterval;
var score = 0;

var codeQuizEl = document.querySelector(".code-quiz");
var questionsEl = document.querySelector("#questions");
var startButton = document.querySelector("#start-button");
var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit-button");
var feedbackEl = document.querySelector(".feedback");

var questionsAnswers = [
    {
      question:
        "The condition in an if / else statement is enclosed within ____.",
      answer: ["quotes", "curly brackets", "parentheses", "square brackets"],
      correctAnswer: "parentheses",
    },
    {
      question: "Commonly used data types DO NOT include:",
  
      answer: ["Strings", "Boolean", "Alerts", "Numbers"],
  
      correctAnswer: "Alerts,",
    },
    {
      question:
        "A very useful tool used during development and debugging for printing content to the debugger is:",
      answer: ["JavaScript", "terminal / bash", "for loops", "console.log"],
      correctAnswer: "console.log",
    },
    {
      question:
        "String values must be enclosed within ____ when being assigned to variables.",
      answer: ["commas", "curly brackets", "quotes", "parentheses"],
      correctAnswer: "quotes",
    },
    {
      question: "Arrays in JavaScript can be used to store ____.",
      answer: [
        "numbers & strings",
        "other arrays",
        "booleans",
        "all of the above",
      ],
      correctAnswer: "all of the above,",
    },
  ];
score = questionsAnswers.length;

function startQuiz() {
    codeQuizEl.style.display = "none";
    questionsEl.style.display = "block";
    startTimer();
    displayQuestion(questionCounter);
};

startButton.addEventListener("click", startQuiz);

function startTimer() {
    timerInterval = setInterval(function () {
      timeLeft--;
      document.querySelector(".timer").textContent = "Timer: " + timeLeft;
  
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  };

function displayQuestion(counter) {
    var currentQuestionsEl = document.querySelector("#current-question");
    var answerEl = document.querySelector("#answer");
    var questionObj = questionsAnswers[counter];
  
    currentQuestionsEl.textContent = questionObj.question;
    answerEl.innerHTML = "";
  
    for (var i = 0; i < questionObj.answer.length; i++) {
      var answerButton = document.createElement("button");
      answerButton.textContent = questionObj.answer[i];
      answerButton.value = questionObj.answer[i];
      answerEl.appendChild(answerButton);
      answerButton.addEventListener("click", function (event) {
        checkAnswer(event.target.value);
      });
    };
};

function checkAnswer(userValue) {
    var questionObj = questionsAnswers[questionCounter];
    var isAnswerCorrect
  
    for (var i = 0; i < questionObj.correctAnswer.length; i++) {
        if (userValue === questionObj.correctAnswer[i]) {
        isAnswerCorrect = true;
      }
    }
        if (isAnswerCorrect) {
        feedbackEl.textContent = "Correct!";
        score++;
    } 
    else {
      feedbackEl.textContent = "Incorrect!";
      timeLeft -= 15;
    if (timeLeft < 0) {
        timeLeft = 0;
      }
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function () {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1200);
  
    questionCounter++;
    if (questionCounter < questionsAnswers.length) {
        displayQuestion(questionCounter);
    } else {
        endQuiz();
  }
};

function endQuiz() {
    clearInterval(timerInterval);
    questionsEl.style.display = "none";
    feedbackEl.textContent = "Quiz Over!";
    document.querySelector(".timer").textContent = "Time: 0";
    document.getElementById("final-score").textContent =
      "Your final score is: " + score;
    document.getElementById("all-done").style.display = "block";
};
  
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var initials = initialsInput.value.slice(0, 3);
    var savedScore = { initials: initials, score: score };
    console.log("Initials:", initials);
    console.log("Score:", savedScore);
});

