
const cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
}
];
const cardsInPlay = [];

function checkForMatch (){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}

}
function flipCard(){

console.log("User flipped " + cards[cardId].rank)
cardsInPlay.push(cards[cardId].rank);
cardsInPlay;
console.log(cards[cardId].suit);
console.log(cards[cardId].cardImage);
this.setAttribute(src, cards[cardId].cardImage);
if ( cardsInPlay.length === 2){
	checkForMatch();
} 
}


function createBoard(){
	for (let i = 0; i < cards.length; i++){
		this.getAttribute('data-id');

		let newListItem = document.createElement('cardElement');

	cardElement.setAttribute(src, 'images/back.png');
	cardElement.setAttribute('data-id', i);

	button.addEventListener('click', flipCard);
	document.getElementsByid('game-board')[0].appendChild(newListItem);
	}
createBoard();	
}

