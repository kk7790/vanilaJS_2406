const userInput = document.querySelector("#userInput");
const maxInput = document.querySelector("#maxValue");
const userInputValue = document.querySelector("#userChoseValue");
const userResult = document.querySelector("#result1");
const LoseWin = document.querySelector("#result2");

function onSubmit(event) {
  event.preventDefault();
  paintResult();
}

function paintResult() {
  const machineChose = Math.floor(Math.random() * Number(maxInput.value));
  userResult.classList.remove("hidden");
  LoseWin.classList.remove("hidden");
  userResult.innerText = `You chose ${userInputValue.value}, the machine chose: ${machineChose}.`;
  if (parseInt(userInputValue.value) === machineChose) {
    LoseWin.innerText = `You won!`;
  } else {
    LoseWin.innerText = `You lose!`;
  }
}

userInput.addEventListener("submit", onSubmit);



