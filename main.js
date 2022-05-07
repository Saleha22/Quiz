// global declarations
const questions = [
  "What is the capital of Argentina?",
  "What is the smallest country in Europe?",
  "What is the largest country in Europe?",
  "What is the capital of Russia?",
  "What language is spoken in Italy?",
];

const answers = [
  ["0|London", "0|Brisbane", "0|Lisbon", "1|Buenos Aires"],
  ["0|Monaco", "0|Jersey", "1|Vatican City", "0|San Marino"],
  ["1|Ukraine", "0|Spain", "0|Finland", "0|Latvia"],
  ["0|Saint Petersburg", "1|Moscow", "0|Novosibirsk", "0|Dubai"],
  ["0|Spanish", "1|Italian", "0|German", "0|Polish"],
];
let questionIndex = 0;
let timerValue = 10 * questions.length;
let quizComplete = false;
let finalScore;

const onLoad = () => {
  // initialise local storage
  // check if highscores exists in LS
  // if false then set highscores to empty array in LS
};

const removeStartSection = () => {};

const startTimer = () => {
  // declare function to execute every 1 sec
  const countdown = () => {
    // decrement timer value
    timerValue--;
    renderTimerSection();
    // if quizComplete is true then stop timer
    if (quizComplete || timerValue == 0) {
      return true;
    } else {
      return false;
    }
    // check if timer reaches 0
    // if true render game over
  };

  // setInterval of 1000ms (1s) (function(){
  setInterval(function () {
    countdown();
  }, 1000);
};

const validateAnswer = (result) => {
  if (result == 0) {
    timerValue = timerValue - 5;
    document.getElementById("status").innerHTML = "wrong";
  } else {
    document.getElementById("status").innerHTML = "correct";
  }
  setTimeout(function () {}, 500);
  // if incorrect subtract 5 seconds from timerValue
  // if incorrect render error alert with message and status
  // if correct render success alert with message and status
  // set timeout for 500ms and then go to next question
  // if question is last question set quizComplete to true and then render form

  questionIndex++;

  if (questionIndex === questions.length) {
    quizComplete = true;
    renderForm();
  } else {
    renderQuestionSection();
  }

  // if question is not last question then increment question index and render next question
};

const handleFormSubmit = () => {
  // get value from input
  const initials = document.getElementById("initials").value;

  // check if empty then render error alert with message and status
  // if not empty then create the score object
  // {
  //   fullName: "Bob Smith",
  //   score: 25
  // }
  const score = {
    fullName: initials,
    score: finalScore,
  };
  // push score object to LS
  // get highscores in localstorage under the name quizHighsocres -> if none exist, create empty array as highscoresInLs
  let highscoresInLs = JSON.parse(localStorage.getItem("quizHighscores")) || [];
  highscoresInLs.push(score);
  localStorage.setItem("quizHighscores", JSON.stringify(highscoresInLs));
  // render quizCompleteSection
  renderQuizCompleteSection();
};

const renderTimerSection = () => {
  // use HTML as guide and build in JS
  document.getElementById("timerValue").innerHTML =
    "Your time remaining is " + timerValue;
  // append section to main
};

const renderQuestionSection = () => {
  // use HTML as guide and build in JS

  let question = questions[questionIndex];
  let currentAnswers = answers[questionIndex];
  let output = `<span class='question'>${question}</span><br>`;

  currentAnswers.forEach((answer) => {
    answer = answer.split("|");

    output += `<span onclick='validateAnswer(${answer[0]})'
      class='answer'>${answer[1]}</span><br>`;
  });

  document.getElementById("questionSection").innerHTML = output;

  // append section to main
  // add click event listener on #question-section
};

const renderGameOver = () => {
  // use HTML as guide and build in JS
  // append section to main
};

const renderAlert = (message, status) => {
  // use HTML as guide and build in JS
  // append div to #question-section
};

const renderForm = () => {
  document.getElementById("form").style.display = "block";
  finalScore = timerValue;
  document.getElementById("questionSection").style.display = "none";
  clearInterval(timerValue);
  document.getElementById("timerValue").innerHTML = "";
  document.getElementById("status").innerHTML = "";
  document.getElementById("hs-alert").textContent =
    "Your final score is: " + finalScore;
  // use HTML as guide and build in JS
  // append section to main
  // add submit event handler to form
  const submitBtn = document.getElementById("submit-highscore");
  submitBtn.addEventListener("click", handleFormSubmit);
};

const renderQuizCompleteSection = () => {
  let highscoresInLs = JSON.parse(localStorage.getItem("quizHighscores")) || [];

  // use HTML as guide and build in JS
  let highscoresSection = document.getElementById("highscoresSection");

  for (let i = 0; i < highscoresInLs.length; i++) {
    let highscore = document.createElement("p");
    highscore.textContent =
      "Player: " +
      highscoresInLs[i].fullName +
      "|| Score: " +
      highscoresInLs[i].score;

    highscoresSection.appendChild(highscore);
  }
  // append section to main
};

const startQuiz = () => {
  // remove start section
  document.getElementById("startQuiz").style.display = "none";

  // start timer
  startTimer();
  // render timer section
  renderTimerSection();
  // render question section
  renderQuestionSection();
};

// add event listeners
// add document on load event listener
// add start button click event listener
