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
  if (questionIndex == questions.length) {
    quizComplete = true;
    renderForm();
  } else {
    questionIndex++;
    renderQuestionSection();
  }

  // if question is not last question then increment question index and render next question
};

const handleFormSubmit = () => {
  // get value from input
  // check if empty then render error alert with message and status
  // if not empty then create the score object
  // {
  //   fullName: "Bob Smith",
  //   score: 25
  // }
  // push score object to LS
  // render quizCompleteSection
};

const renderTimerSection = () => {
  // use HTML as guide and build in JS
  document.getElementById("timerValue").innerHTML = timerValue;
  // append section to main
};

const renderQuestionSection = () => {
  // use HTML as guide and build in JS
  if (questionIndex < questions.length) {
    let question = questions[questionIndex];
    let currentAnswers = answers[questionIndex];
    let output = `<span class='question'>${question}</span><br>`;

    currentAnswers.forEach((answer) => {
      answer = answer.split("|");

      output += `<span onclick='validateAnswer(${answer[0]})'
      class='answer'>${answer[1]}</span><br>`;
    });

    document.getElementById("questionSection").innerHTML = output;
  } else {
    renderGameOver();
  }
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
  document.getElementById("fom").style.display = "block";
  // use HTML as guide and build in JS
  // append section to main
  // add submit event handler to form
};

const renderQuizCompleteSection = () => {
  // use HTML as guide and build in JS
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
