var counter = 0;
var time = 75;
var timerInterval;
var score = 0;

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