const screenOne = document.querySelector(".screenOne")
const screenTwo = document.querySelector(".screenTwo")
const submit = document.querySelector("#submit");
const button = document.querySelector('#anotherAttempt')

let randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1


// Eventos
submit.addEventListener('click', handleTryClick);
button.addEventListener('click', handleResetClick)
document.addEventListener('keydown', (event) => {
  if (event.key == 'Enter' && screenOne.classList.contains('hide')) {
    handleResetClick()
  }
})

// funções
function handleTryClick(event) {
  event.preventDefault(); // não faça a padrão de envio do formulário

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) === randomNumber) {
    toggleScreen()

    document
      .querySelector(".screenTwo h2")
      .innerHTML = `Acertou em ${xAttempts} tentativas`;

    return;
  }

  inputNumber.value = null;
  xAttempts++;
}

function handleResetClick() {
  toggleScreen();
  xAttempts = 1;
  inputNumber.value = null;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen() {
  screenOne.classList.toggle('hide');
  screenTwo.classList.toggle('hide');
}