const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

function handleClick(event) {
  event.preventDefault();

  const inNumber = document.getElementById("inNumber");

  if (Number(inNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide");
    document.querySelector(".screen2").classList.remove("hide");

    document.querySelector(
      "h2"
    ).innerHTML = `Você acertou em ${xAttempts} tentativas`;
  }

  inNumber.value = "";
  inNumber.focus();
  xAttempts++;
}
