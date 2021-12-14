"use strict";

// 1. Variables globales: querySelector y datos de toda la página.
const playButton = document.querySelector(".js_button");
const gameSelect = document.querySelector(".js_playerSelect");
const partialResult = document.querySelector(".js_partial");
let computerMove = "";

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
	let randomNum = generateRandom();
	if (randomNum >= 1 && randomNum <= 3) {
		computerMove = "piedra";
	} else if (randomNum >= 4 && randomNum <= 6) {
		computerMove = "papel";
	} else if (randomNum >= 7 && randomNum <= 9) {
		computerMove = "tijera";
	}
	console.log(computerMove);
	return computerMove;
}

// Recogemos el value de la jugada de la usuaria
const playerMove = gameSelect.value;

// Pintamos el resultado parcial comparando lajugada de la usuaria y la de la computadora

function comparePlays() {
	console.log(playerMove);
	const computerMove = generateComputerMove();
	if (playerMove === computerMove) {
		partialResult.innerHTML = "Empate";
	}
	switch (playerMove === "piedra") {
		case computerMove === "papel":
			partialResult.innerHTML = "Has perdido";
			break;
		case computerMove === "tijera":
			partialResult.innerHTML = "Has ganado";
	}

	switch (playerMove === "papel") {
		case computerMove === "piedra":
			partialResult.innerHTML = "Has ganado";
			break;
		case computerMove === "tijera":
			partialResult.innerHTML = "Has perdido";
	}

	switch (playerMove === "tijera") {
		case computerMove === "piedra":
			partialResult.innerHTML = "Has perdido";
			break;
		case computerMove === "papel":
			partialResult.innerHTML = "Has ganado";
	}
}
function handleClickAJugar(event) {
	event.preventDefault();
	generateComputerMove();
	comparePlays();
}

// 3. Código que se ejecuta cuando se carga la página (listeners)

playButton.addEventListener("click", handleClickAJugar);
