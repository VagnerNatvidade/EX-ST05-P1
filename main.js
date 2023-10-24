const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");

const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

// Callback
function handleTryClick(event) {
  event.preventDefault();

  const inNumber = document.getElementById("inNumber");

  if (Number(inNumber.value) == randomNumber) {
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");

    document.querySelector(
      "h2"
    ).innerHTML = `Você acertou em ${xAttempts} tentativas`;
  }

  inNumber.value = "";
  inNumber.focus();
  xAttempts++;
}

function handleResetClick() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");

  xAttempts = 1;
  inNumber.focus();
}

// Event
const btnTry = document.getElementById("btnTry");
const btnReset = document.getElementById("btnReset");

btnTry.addEventListener("click", handleTryClick);
btnReset.addEventListener("click", handleResetClick);
