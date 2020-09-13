//console.log("User flipped " + cardOne);
// console.log("User flipped " + cardFour);


const cards = ["Queen", "Queen", "King", "King"];
const cardsInPlay = [];

function checkForMatch (){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}

}
function flipCard(cardId){

console.log("User flipped " + cards[cardId])
cardsInPlay.push(cards[cardId]);
cardsInPlay;

if ( cardsInPlay.length === 2){
	checkForMatch();
} 
}

flipCard(0);
flipCard(2);


//let cardOne = cards[0];
//cardsInPlay.push(cardOne);
//cardsInPlay;
//console.log("User flipped " + cardOne);

//let cardTwo = cards[2];
//cardsInPlay.push(cardTwo);
//cardsInPlay; 
//console.log("User flipped " + cardTwo);
