import { renderQuestion } from "./questionRender.js";

export let inputNum = document.querySelector(".numQuestion");
export const inputCategory = document.querySelector(".category");
export const inputDiffi = document.querySelector(".difficulty");
export const inputType = document.querySelector(".type");
export const correctScoreEL = document.querySelector(".correct-score");

// main funciton
export let dataArray;
export const userInput = async function () {
  if (inputNum.value <= 50 && inputNum.value > 0) {
    document.querySelector(".screen--1").classList.add("hidden");
    document.querySelector(".screen--2").classList.remove("hidden");
    const tobechecked = `amount=${inputNum.value}&category=${inputCategory.value}&difficulty=${inputDiffi.value}&type=${inputType.value}`;

    const checked = tobechecked
      .split("&")
      .filter((value) => !value.includes("any"))
      .join("&");
    console.log(checked);

    const fetchingData = await fetch(`https://opentdb.com/api.php?${checked}`);
    const data1 = await fetchingData.json();

    // done here this so that in renderquestion can get data
    dataArray = data1;
    // showing the score 1st time here
    const markup = ` <div class="correct-score">
  Score 0<span>/</span> <span class="total-question">${inputNum.value}</span>
  <div class="question-count">Question 1 of ${inputNum.value}</div>
</div>`;
    correctScoreEL.textContent = "";
    correctScoreEL.insertAdjacentHTML("afterbegin", markup);
    renderQuestion(dataArray.results[0]);
  } else {
    alert("Enter the value more than 0 and less than 50");
    window.location.reload();
  }
};
