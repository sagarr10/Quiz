// Updating the score =================================
export const correctScoreEL = document.querySelector(".correct-score");
export const inputNum = document.querySelector(".numQuestion");

export let score = 0;
export let que = 1;
export const scoreFunc = function () {
  // score++;
  const markup = ` <div class="correct-score">
  Score ${score}<span>/</span> <span class="total-question">${inputNum.value}</span>
  <div class="question-count">Question ${que} of ${inputNum.value}</div>

</div>`;
  correctScoreEL.textContent = "";
  correctScoreEL.insertAdjacentHTML("afterbegin", markup);
  // console.log(score, correctScoreEL);
};

// Updating the score END =================================
//====================================== OPTION CHECK HERE ==========
export const optionCheck = function (el, data) {
  let answerSelected = false;
  el.forEach((element) => {
    element.addEventListener("click", function (e) {
      const btn = e.target.closest(".list");

      if (!answerSelected) {
        if (
          HTMLDecode(btn.innerHTML.split(".")[1]) ===
          HTMLDecode(data.correct_answer)
        ) {
          element.classList.add("correctAnswer");
          answerSelected = true;
          score++;
          scoreFunc();
        } else {
          const ans = Object.values(el).find(
            (e) =>
              HTMLDecode(e.innerHTML.split(".")[1]) ===
              HTMLDecode(data.correct_answer)
          );
          ans.classList.add("correctAnswer");
          scoreFunc();
          element.classList.add("wrongAnswer");
          // setTimeout(() => {
          //   list.forEach((item) => {
          //     item.style.opacity = 0;
          //   });
          // }, 500);
          answerSelected = true;
          const show = data.correct_answer;
          const showBTN = document.querySelector(".correct-answer-show");
          showBTN.textContent = `Correct Answer:-${show}`;
        }
      }
    });
  });
};
// html entites
function HTMLDecode(textString) {
  let doc = new DOMParser().parseFromString(textString, "text/html");
  return doc.documentElement.textContent;
}
//===============================================================
// next-btn function
const screen__final = document.querySelector(".screen--3");
import { dataArray } from "./screen-1.js";
import { renderQuestion } from "./questionRender.js";
let currQuestion = 0;

export const nextFunc = function () {
  if (currQuestion < dataArray.results.length - 1) {
    currQuestion++;
    que++;
    console.log(que);
    scoreFunc();
    renderQuestion(dataArray.results[currQuestion]);
  } else {
    console.log(`Limit over`);
    finalScoreFunc();
  }
};

export const finalScoreFunc = function () {
  const markup = ` <div class="quiz-score">
<div class="correct-score">
  Final Score:-${score}/${inputNum.value}
  </div>
  <input type="submit" class="playAgain--btn" value="Play Again" />
</div>`;

  screen__final.innerHTML = "";
  screen__final.classList.remove("hidden");
  document.querySelector(".screen--2").classList.add("hidden");
  screen__final.insertAdjacentHTML("afterbegin", markup);
  const playAgain = document.querySelector(".playAgain--btn");
  playAgain.addEventListener("click", () => window.location.reload());
};
