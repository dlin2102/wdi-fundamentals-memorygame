console.log("JS file is connected to HTML! Woo!")

var gameBoard = document.getElementById("game-board");
var cards = ['queen','queen','king','king'];
var cardsInPlay = [];

function createBoard(){
	var cardElement = document.querySelectorAll('div.card');
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('div')
		cardElement.className = 'card';
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
		gameBoard.appendChild(cardElement);
	}
}

function isMatch(cardInPlay){
	if (cardsInPlay[0] == cardsInPlay[1]) {
		alert("You found a match!");
	} else {
		alert("Try again!");
	}
	var cards = document.querySelectorAll('div.card');
	
	setTimeout(function(){
		for (var i = 0; i < cards.length; i++) {
			cards[i].innerHTML = '';
		}
	}, 1000)
}

function isTwoCards(){
  if (this.getAttribute('data-card')=='queen'){
  	this.innerHTML = '<img src="queen.png" alt="Queen of Spades" />';
  }
  else {
  	this.innerHTML = '<img src="king.png" alt="King of Spades" />';
  }    
  cardsInPlay.push(this.getAttribute('data-card'));  
  if (cardsInPlay.length === 2) {
  	isMatch(cardsInPlay);
  	  cardsInPlay = [];
  }
}

createBoard();