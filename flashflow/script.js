const flashcards = [
	{
		question: "O que é JavaScript?",
		answer: "JavaScript é uma linguagem de programação interpretada e orientada a objetos, usada principalmente para adicionar interatividade e dinamismo a páginas web."
	},
	{
		question: "O que são funções de callback em JavaScript?",
		answer: "São funções passadas como argumento para outra função, que serão executadas após um determinado evento ou operação."
	},
	{
		question: "O que é o this em JavaScript?",
		answer: "this se refere ao contexto de execução atual. Seu valor varia dependendo de como a função é chamada."
	},
	{
		question: "O que é hoisting em JavaScript?",
		answer: 'Hoisting é o comportamento em que declarações de variáveis e funções são "movidas" para o topo do escopo durante a fase de compilação. Isso faz com que seja possível usar uma função antes de sua definição no código.'
	},
	{
		question: "O que são tipos primitivos em JavaScript?",
		answer: "Os tipos primitivos em JavaScript são: String, Number, Boolean, Null, Undefined, BigInt e Symbol. Eles representam valores imutáveis e não são objetos."
	},
];


const startButton  = document.querySelector("button.button-start");
const cardSection  = document.getElementById("card-section");
const buttonNext   = document.getElementById("button-next");
const cardQuestion = document.querySelector("p.question");
const cardContent  = document.querySelector("div.card-content");

const flashcardsSize = flashcards.length;

let currentFlashcard = 0;
let clicksOnTheCard  = 0;

function startFlashCards() {
    startButton.classList.add("display-none");
    
    cardSection.classList.remove("display-none");
    cardSection.classList.add("card-container");

    buttonNext.classList.remove("display-none");

    const cardQuantity = document.createElement("p");
    cardQuantity.classList.add("card-quantity");
    cardQuantity.textContent = `Card ${currentFlashcard + 1} de ${flashcardsSize}`;
    
    cardSection.prepend(cardQuantity);

    cardQuestion.textContent = flashcards[currentFlashcard].question;
}

function revealAnswer() {
    if (clicksOnTheCard > 0) {
        return;
    }

    cardQuestion.classList.add("display-none");

    const cardAnswer = document.createElement("p");
    cardAnswer.classList.add("answer");
    cardAnswer.textContent = flashcards[currentFlashcard].answer;

    cardContent.appendChild(cardAnswer);

    clicksOnTheCard += 1;
}

startButton.addEventListener("click", startFlashCards);
cardContent.addEventListener("click", revealAnswer);
