"use strict";

/////ELEMENTOS HTML/////
const playButton = document.querySelector(".js_button");
const playerSelect = document.querySelector(".js_playerSelect");
const partialResult = document.querySelector(".js_partial");
const playerResult = document.querySelector(".js_playerResult");
const computerResult = document.querySelector(".js_computerResult");
const resetButton = document.querySelector(".js_reset");

/////VARIABLES GLOBALES/////
let playerScore = 0;
let computerScore = 0;
let rounds = 0;

/////FUNCIONES/////

function getRandomNumber(max) {
	return Math.ceil(Math.random() * max);
}
//generar jugada aleatoria del ordenador

function generateComputerMove() {
	let computerMove = "";
	const randomNum = getRandomNumber(9);

	if (randomNum <= 3) {
		computerMove = "piedra";
	} else if (randomNum >= 4 && randomNum <= 6) {
		computerMove = "papel";
	} else {
		computerMove = "tijera";
	}
	return computerMove;
}

// Obtener jugada de la usuaria
function getUserPlay() {
	let playerMove = playerSelect.value;
	return playerMove;
}

// comparar lajugada de la usuaria y la del ordenador
function comparePlays() {
	const playerMove = getUserPlay();
	console.log(`el movimiento del jugador es ${playerMove}`);
	const computerMove = generateComputerMove();
	console.log(`el movimiento del ordenador es ${computerMove}`);
	if (playerMove === "Escoge tu jugada") {
		alert("Por favor, escoge una jugada");
	} else {
		if (playerMove === computerMove) {
			tie();
		} else if (playerMove === "piedra") {
			if (computerMove === "papel") {
				computerWins();
			} else if (computerMove === "tijera") {
				playerWins();
			}
		} else if (playerMove === "papel") {
			if (computerMove === "tijera") {
				computerWins();
			} else if (computerMove === "piedra") {
				playerWins();
			}
		} else if (playerMove === "tijera") {
			if (computerMove === "papel") {
				playerWins();
			} else if (computerMove === "piedra") {
				computerWins();
			}
		}
		addRounds();
	}
}

//Sumar puntos al marcador
function addScore() {
	playerResult.innerHTML = playerScore;
	computerResult.innerHTML = computerScore;
}

//Sumar Rondas
function addRounds() {
	rounds++;
}

//Pintar resultado final al llegar a 10 rondas
function renderFinalResult() {
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

//Sumar puntos y pintar resultado parcial
function playerWins() {
	partialResult.innerHTML = "¡Has ganado!";
	playerScore++;
}

function computerWins() {
	partialResult.innerHTML = "¡Has perdido!";
	computerScore++;
}

function tie() {
	partialResult.innerHTML = "¡Empate!";
}

//función que maneja el botón reiniciar juego

function handleResetButton() {
	location.reload();
}

//función manejadora del botón jugar
function handleClickAJugar(event) {
	event.preventDefault();
	comparePlays();
	addScore();
	renderFinalResult();
}

/////LISTENERS/////

playButton.addEventListener("click", handleClickAJugar);
resetButton.addEventListener("click", handleResetButton);
