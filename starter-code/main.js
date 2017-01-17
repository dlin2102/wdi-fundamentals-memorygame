console.log("JS file is connected to HTML! Woo!")

var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

if (cardFour === cardTwo){
	alert('You found a match!')
} else {
	alert('Sorry, try again.')
}

var gameBoard = document.getElementById("game-board");

function createCards() {
	for (var i = 0; i < 4; i++) {
		var card = document.createElement('div')
		card.className = 'card';
		gameBoard.appendChild(card);
	}
}

createCards();