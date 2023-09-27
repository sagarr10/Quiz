import { userInput } from "./screen-1.js";
// form
const form = document.querySelector(".form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  userInput();
  // hideFunc();
});
