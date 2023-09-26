import { userInput } from "./screen-1.js";

const category = document.querySelector(".quiz-category");
const question = document.querySelector(".quiz-question");
const options = document.querySelector(".quiz-options");
const nextBtn = document.querySelector(".check-answer");
//

const quizScore = document.querySelector(".quiz-score");
const score = document.querySelector(".correct-score");
const totalQuestion = document.querySelector(".total-question");

// hiden function
const hideFunc = function () {
  document.querySelector(".screen--1").classList.add("hidden");
  document.querySelector(".screen--2").classList.remove("hidden");
};
// form
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  userInput();
  hideFunc();
});
