// --- Variables ---
const clickBTN = document.getElementById("click-BTN");
const subtractBTN = document.getElementById("subtract-BTN");
const resetBTN = document.getElementById("reset-BTN");
const clickCountValue = document.querySelector(".click-count-value");
let counter = 0;

// --- Functions ---
function addClick() {
  counter = counter + 1;
  clickCountValue.innerText = counter;
}

function subtractClick() {
  counter = counter - 1;
  clickCountValue.innerText = counter;
}

function resetClicks() {
  counter = 0;
  clickCountValue.innerText = counter;
}

// --- Event Listeners ---
clickBTN.addEventListener("click", addClick);
subtractBTN.addEventListener("click", subtractClick);
resetBTN.addEventListener("click", resetClicks);
