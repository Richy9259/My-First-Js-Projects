// let messageEl = document.getElementById("message-el");
// let player = {
//   name: "Richard",
//   chips: 1000,
// };
// let sumEl = document.getElementById("sum-el");
// let cardEl = document.getElementById("card-el");
// let playerEl = document.getElementById("player-el");
// let cards = [];
// let sum = "0";
// let hasBlackJack = false;
// let isAlive = false;
// playerEl.textContent = player.name + ": " + "$" + player.chips;
// function getRandomCard() {
//   let random = Math.floor(Math.random() * 13) + 1;
//   if (random > 10) {
//     return 10;
//   } else if (random === 1) {
//     return 11;
//   } else {
//     return random;
//   }
// }
// function startGame() {
//   isAlive = true;
//   let firstCard = getRandomCard();
//   let secondCard = getRandomCard();
//   let cards = [firstCard, secondCard]; // list of items
//   let sum = firstCard + secondCard;
//   renderGame();
// }
// function renderGame() {
//   cardEl.textContent = "Cards: ";
//   for (let i = 0; i < cards.length; i++) {
//     cardEl.textContent += cards[i] + " ";
//   }

//   sumEl.textContent = "Sum: " + sum;
//   if (sum <= 20) {
//     message = "Do you want to draw a new card?";
//   } else if (sum === 21) {
//     message = "You've got Blackjack";
//     hasBlackJack = true;
//   } else {
//     message = "You are out of the game!";
//     isAlive = false;
//   }

//   // //Cash out
//   // console.log(hasBlackJack);
//   // console.log(isAlive);

//   messageEl.textContent = message;
// }

// function newCard() {
//   if (isAlive === true && hasBlackJack === false) {
//     let Card = getRandomCard();
//     sum += Card;
//     cards.push(Card);
//     renderGame();
//   }
// }

let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"];

largeCountries.pop();
largeCountries.push("pakistan");
largeCountries.shift();
largeCountries.unshift("china");
console.log(largeCountries);
