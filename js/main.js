"use strict";

/////ELEMENTOS HTML/////
const playButton = document.querySelector(".js_button");
const playerSelect = document.querySelector(".js_playerSelect");
const partialResult = document.querySelector(".js_partial");
const playerResult = document.querySelector(".js_playerResult");
const computerResult = document.querySelector(".js_computerResult");
const resetButton = document.querySelector(".js_reset");

/////VARIABLES GLOBALES/////
let computerMove = "";
let playerMove = "";
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

/////FUNCIONES/////

function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}
//generar jugada aleatoria del ordenador

function generateComputerMove() {
	const randomNum = getRandomNumber(9);

	if (randomNum <= 3) {
		computerMove = "piedra";
	} else if (randomNum >= 4 && randomNum <= 6) {
		computerMove = "papel";
	} else {
		computerMove = "tijera";
	}
}

// Obtenermos la jugada de la usuaria
function getUserPlay() {
	playerMove = playerSelect.value;
}
// // comparamos lajugada de la usuaria y la de la computadora

function comparePlays() {
	getUserPlay(playerMove);
	console.log(`el movimiento del jugador es ${playerMove}`);
	generateComputerMove(computerMove);
	console.log(`el movimiento del ordenador es ${computerMove}`);

	if (playerMove === computerMove) {
		//empate
		partialResult.innerHTML = "Empate!";
	} else if (playerMove === "piedra") {
		if (computerMove === "papel") {
			partialResult.innerHTML = "Has perdido";
			computerScore++;
		} else if (computerMove === "tijera") {
			partialResult.innerHTML = "Has ganado";
			playerScore++;
		}
	} else if (playerMove === "papel") {
		if (computerMove === "tijera") {
			partialResult.innerHTML = "Has perdido";
			computerScore++;
		} else if (computerMove === "piedra") {
			partialResult.innerHTML = "Has ganado";
			playerScore++;
		}
	} else if (playerMove === "tijera") {
		if (computerMove === "papel") {
			partialResult.innerHTML = "Has ganado";
			playerScore++;
		} else if (computerMove === "piedra") {
			partialResult.innerHTML = "Has perdido";
			computerScore++;
		}
	}
}

// // funcion que suma puntos al marcador

function addScore() {
	playerResult.innerHTML = playerScore;
	computerResult.innerHTML = computerScore;
}

//función que suma rondas

function addRounds() {
	rounds++;
}

//función que pinta resultado final al llegar a 10 rondas
function renderEndResult() {
	if (rounds === 10) {
		if (playerScore > computerScore) {
			partialResult.innerHTML = "¡Has ganado el Juego!";
		} else if (playerScore < computerScore) {
			partialResult.innerHTML = "¡Has perdido el Juego!";
		} else {
			partialResult.innerHTML = "Empate!";
		}
		playButton.classList.add("hidden");
		resetButton.classList.remove("hidden");
	}
}

//función manejadora del botón jugar
function handleClickAJugar(event) {
	event.preventDefault();
	addRounds();
	console.log(rounds);
	comparePlays();
	addScore();
	renderEndResult();
}

//función que maneja el botón reiniciar juego

function handleResetButton() {
	playButton.classList.remove("hidden");
	resetButton.classList.add("hidden");
	playerScore = 0;
	computerScore = 0;
	rounds = 0;
	playerResult.innerHTML = playerScore;
	computerResult.innerHTML = computerScore;
	partialResult.innerHTML = "Vamos a Jugar!";
	playerSelect.value = "escoge un juego";
}

/////LISTENERS/////

playButton.addEventListener("click", handleClickAJugar);
resetButton.addEventListener("click", handleResetButton);
