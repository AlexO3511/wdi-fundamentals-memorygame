console.log("Up and running!");
//console.log("User flipped " + cardOne);
// console.log("User flipped " + cardFour);


const cards = ["Queen", "Queen", "King", "King"];
const cardsInPlay = [];


let cardOne = cards[0];
cardsInPlay.push(cardOne);
cardsInPlay;
console.log("User flipped " + cardOne);

let cardTwo = cards[2];
cardsInPlay.push(cardTwo);
cardsInPlay; 
console.log("User flipped " + cardTwo);

if ( cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
} 