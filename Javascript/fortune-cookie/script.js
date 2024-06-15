frases_biscoito_da_sorte = [
  "Acredite em si mesmo e em todas as suas capacidades.",
  "Grandes coisas estão por vir, continue seguindo em frente.",
  "Você é mais corajoso do que imagina, mais forte do que parece e mais inteligente do que pensa.",
  "Cada dia é uma nova oportunidade para recomeçar.",
  "A felicidade é um caminho, não um destino.",
  "Confie no processo, o universo tem um plano para você.",
  "O sucesso é a soma de pequenos esforços repetidos diariamente.",
  "Você é a única pessoa no mundo que pode usar sua capacidade.",
  "O amor e a alegria estão ao seu redor, abra-se para recebê-los.",
  "Tudo o que você precisa para alcançar seus sonhos está dentro de você.",
]

function random() {
  return Math.round(Math.random() * 10);
}

let randomNumber = random()
let seeYourLuck = document.querySelector(".seeYourLuck");
let tryAgain = document.querySelector(".tryAgain");
let paragraphTryAgain = document.querySelector(".paragraphTryAgain");

document.querySelector("#submit").addEventListener('click', (event) => {
  event.preventDefault();
  hideDisplayToggle();
});

document.querySelector("#newCookie").addEventListener('click', () => {
  randomNumber = random()
  hideDisplayToggle();
});

function hideDisplayToggle() {
  paragraphTryAgain.innerHTML = frases_biscoito_da_sorte[randomNumber]
  seeYourLuck.classList.toggle('hide');
  tryAgain.classList.toggle('hide');
}

