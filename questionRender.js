const quizContainer = document.querySelector(".quiz-container");
import { finalScoreFunc, optionCheck } from "./optionCheck.js";
import { nextFunc } from "./optionCheck.js";
{
  /* <div class="quiz-category">Category:-${data.category}</div> */
}
export const renderQuestion = async function (data) {
  const markup = `
  <div class="quiz-question">
  ${data.question}
  </div>
  <div class="quiz-options">
  ${optionsFunc(data)}
  </div>
  <div class="correct-answer-show">&nbsp</div>
  <div class="btns">
  <button class="btn quit-quiz">Quit</button>
  <button class="check-answer">Next</button>
</div>
  `;
  quizContainer.insertAdjacentHTML("afterbegin", renderSpinner());
  quizContainer.innerHTML = "";
  quizContainer.insertAdjacentHTML("afterbegin", markup);
  console.log(data.correct_answer);

  // list check
  const list = document.querySelectorAll("li");
  optionCheck(list, data);
  // next btn
  const nextBtn = document.querySelector(".check-answer");
  nextBtn.addEventListener("click", nextFunc);

  // quit btn
  const quitBTN = document.querySelector(".quit-quiz");
  quitBTN.addEventListener("click", finalScoreFunc);
};
// render spinner
export const spinner = document.querySelector(".loader");
export const renderSpinner = function () {
  spinner.classList.remove("hidden");
};
//

// mixing the options
let correctAnswer = "";
export const optionsFunc = function (data) {
  correctAnswer = data.correct_answer;
  let incorrectAnswer = data.incorrect_answers;
  let optionsList = incorrectAnswer;
  optionsList.splice(
    Math.floor(Math.random() * (incorrectAnswer.length + 1)),
    0,
    correctAnswer
  );
  // console.log(optionsList);
  const markup = optionsList
    .map((item, index) => {
      return `<li class="list">${index + 1}.${item}</li>`;
    })
    .join("");

  // console.log(markup);
  return markup;
};
