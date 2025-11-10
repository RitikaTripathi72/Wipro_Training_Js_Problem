const TOTAL_QUESTIONS = 5;
let questionList = Array(TOTAL_QUESTIONS);
let optionsList = Array(TOTAL_QUESTIONS);
let correctOptions = Array(TOTAL_QUESTIONS);
let selectedAnswer = 0;
let currentQuestion = 0;
let score = 0;
let hasChosen = false;

// Initialize 2D array for answers
for (let i = 0; i < TOTAL_QUESTIONS; i++) {
  optionsList[i] = new Array(4);
}

// Load default data
questionList[0] = "The father of C, C++ & Unix is:";
optionsList[0] = ["Forouzan", "Dennis Ritchie", "Andrew Tenenbaum", "Dijkstra"];
correctOptions[0] = 2;

questionList[1] = "The open source OS among the following is:";
optionsList[1] = ["Windows XP", "Mac OS X", "Linux Ubuntu", "Sun Solaris"];
correctOptions[1] = 3;

questionList[2] = "Pancake Sorting Algorithm and BASIC Interpreter were written by:";
optionsList[2] = ["Steve Jobs", "Steve William", "Bill Gates", "Jerry Yang"];
correctOptions[2] = 3;

questionList[3] = "Larry Page and Sergey Brin are co-founders of:";
optionsList[3] = ["Yahoo", "Rediff", "Google", "Apple"];
correctOptions[3] = 3;

questionList[4] = "The first computer to defeat a chess grandmaster was:";
optionsList[4] = ["Chess Zeus", "Armageddon", "White Knight", "Deep Blue"];
correctOptions[4] = 4;

function initializeExam() {
  loadQuestion();
}

function chooseAnswer(optionNum) {
  selectedAnswer = optionNum;
  hasChosen = true;
}

function loadQuestion() {
  document.getElementById("questionText").innerHTML =
    "(" + (currentQuestion + 1) + ") " + questionList[currentQuestion];

  document.getElementById("labelA").innerHTML = "(a) " + optionsList[currentQuestion][0];
  document.getElementById("labelB").innerHTML = "(b) " + optionsList[currentQuestion][1];
  document.getElementById("labelC").innerHTML = "(c) " + optionsList[currentQuestion][2];
  document.getElementById("labelD").innerHTML = "(d) " + optionsList[currentQuestion][3];

  document.getElementById("optA").checked = false;
  document.getElementById("optB").checked = false;
  document.getElementById("optC").checked = false;
  document.getElementById("optD").checked = false;

  selectedAnswer = 0;
  document.getElementById("progressInfo").innerText =
    `Question ${currentQuestion + 1} of ${TOTAL_QUESTIONS}`;
}

function loadNextQuestion() {
  if (!hasChosen) {
    alert("⚠️ Please choose an option before proceeding.");
    return;
  }

  if (selectedAnswer === correctOptions[currentQuestion]) {
    score++;
  }

  hasChosen = false;

  if (currentQuestion < TOTAL_QUESTIONS - 1) {
    currentQuestion++;
    loadQuestion();
  } else {
    alert(`🎯 Exam Completed!\nYour Score: ${score} / ${TOTAL_QUESTIONS}`);
  }
}