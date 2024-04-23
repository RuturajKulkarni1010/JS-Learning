const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quizEl = document.querySelector("#quiz");
const answersEl = document.querySelectorAll(".answer");
const questionEl = document.querySelector(".question");
const aOptionEl = document.querySelector("#a_text");
const bOptionEl = document.querySelector("#b_text");
const cOptionEl = document.querySelector("#c_text");
const dOptionEl = document.querySelector("#d_text");
const submitButtonEl = document.querySelector("#submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  aOptionEl.innerText = currentQuizData.a;
  bOptionEl.innerText = currentQuizData.b;
  cOptionEl.innerText = currentQuizData.c;
  dOptionEl.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answersEl.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answersEl.forEach((answerEl) => {
    if (answerEl.checked === true) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitButtonEl.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quizEl.innerHTML = `
        <h2>You answered correctly at ${score} / ${quizData.length} questions.</h2>

        <button onclick="location.reload()">Reload</button>
      `;
    }
  }
});
