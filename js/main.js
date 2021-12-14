"use strict";

// 1. Variables globales: querySelector y datos de toda la página.
const playButton = document.querySelector(".js_button");
const gameSelect = document.querySelector(".js_playerSelect");
const partialResult = document.querySelector(".js_partial");
const computerMove = "";

// 2. Funciones

//Generamos número aleatorio
function getRandom(max) {
	return Math.ceil(Math.random() * max);
}

// Generar un número aleatorio máximo 9 y lo metemos en una constante
function generateRandom() {
	const randomNum = getRandom(9);
	console.log(randomNum);
	return randomNum;
}

//Asignamos una jugada al número aleatorio
function generateComputerMove() {
	const randomNum = generateRandom();
	if (randomNum >= 1 && randomNum <= 3) {
		computerMove = "piedra";
	} else if (randomNum >= 4 && randomNum <= 6) {
		computerMove = "papel";
	} else if (randomNum >= 7 && randomNum <= 9) {
		computerMove = "tijera";
	}
	return computerMove;
}
console.log(computerMove);
// Reocgemos el value de la jugada de la usuaria
const playerMove = gameSelect.value;

// Pintamos el resultado parcial comparando lajugada de la usuaria y la de la computadora

function comparePlays() {
	const computerMove = generateComputerMove();
	console.log(comparePlays());
	if (playerMove === computerMove) {
		partialResult.innerHTML = "Empate";
	}
}

function handleClickAJugar(event) {
	event.preventDefault();
	generateComputerMove();
}

// 3. Código que se ejecuta cuando se carga la página (listeners)

playButton.addEventListener("click", handleClickAJugar);
