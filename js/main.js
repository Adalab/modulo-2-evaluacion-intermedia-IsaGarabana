"use strict";

// 1. Variables globales: querySelector y datos de toda la página.
const playButton = document.querySelector(".js_button");
const playerSelect = document.querySelector(".js_playerSelect");
const partialResult = document.querySelector(".js_partial");
const playerScore = document.querySelector(".js_playerResult");
const computerScore = document.querySelector(".js_computerResult");
let computerMove = "";
let playerMove = "";

let playerResult = 0;
let computerResult = 0;
// 2. Funciones

//Generamos número aleatorio
function getRandom(max) {
	return Math.ceil(Math.random() * max);
}

// Generar un número aleatorio máximo 9 y lo metemos en una constante
function generateRandom() {
	const randomNum = getRandom(9);
	return randomNum;
}

//Asignamos una jugada al número aleatorio
function generateComputerMove() {
	let randomNum = generateRandom();
	if (randomNum >= 1 && randomNum <= 3) {
		computerMove = "piedra";
	} else if (randomNum >= 4 && randomNum <= 6) {
		computerMove = "papel";
	} else if (randomNum >= 7 && randomNum <= 9) {
		computerMove = "tijera";
	}
	console.log(`el movimiento del ordenador es ${computerMove}`);
	return computerMove;
}

// Recogemos el value de la jugada de la usuaria y pintamos el resultado parcial comparando lajugada de la usuaria y la de la computadora

function comparePlays() {
	playerMove = playerSelect.value;
	console.log(`el movimiento del jugador es ${playerMove}`);

	console.log(partialResult.innerHTML);
	if (playerMove === computerMove) {
		partialResult.innerHTML = "Empate!";
	} else if (playerMove === "piedra") {
		if (computerMove === "papel") {
			partialResult.innerHTML = "La usuaria pierde";
			computerResult++;
		}
		if (computerMove === "tijera") {
			partialResult.innerHTML = "La usuaria gana";
			playerResult++;
		}
	} else if (playerMove === "papel") {
		if (computerMove === "piedra") {
			partialResult.innerHTML = "La usuaria gana";
			playerrResult++;
		}
		if (computerMove === "tijera") {
			partialResult.innerHTML = "La usuaria pierde";
			computerResult++;
		}
	} else if (playerMove === "tijera") {
		if (computerMove === "papel") {
			partialResult.innerHTML = "La usuaria gana";
			playerResult++;
		}
		if (computerMove === "piedra") {
			partialResult.innerHTML = "La usuaria pierde";
			computerResult++;
		}
	}
}

// funcion que suma puntos al marcador

function addScore() {
	playerScore.innerHTML = playerResult;
	computerScore.innerHTML = computerResult;
}

function handleClickAJugar(event) {
	event.preventDefault();
	generateComputerMove();
	comparePlays();
	addScore();
}

// 3. Código que se ejecuta cuando se carga la página (listeners)

playButton.addEventListener("click", handleClickAJugar);
