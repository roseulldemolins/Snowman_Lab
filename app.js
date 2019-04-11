const Game = require('./game');
const Player = require('./player');
const HiddenWord = require('./hiddenword');

let player1 = new Player('Matthew');
let hiddenWord = new HiddenWord('');
let game = new Game(player1, hiddenWord);
game.guessedLetters = [];
/*======================*/

// Input code from Flavio Copes
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question(`Enter a word: `, (enteredWord) => {
  hiddenWord.word = enteredWord;
  game.hiddenWord = hiddenWord;
  console.clear();
  promptLetter();
  promptLetter();
  promptLetter();
  promptLetter();
  promptLetter();
  promptLetter();
//   readline.question(`Please choose a letter: `, (enteredLetter) => {
//   player1.guessLetter(enteredLetter, game);
//   console.log(game.guessedLetters);
//   readline.question(`Please choose a letter: `, (enteredLetter) => {
//     player1.guessLetter(enteredLetter, game);
//     console.log(game.guessedLetters);
//     readline.question(`Please choose a letter: `, (enteredLetter) => {
//     player1.guessLetter(enteredLetter, game);
//     console.log(game.guessedLetters);
//     readline.question(`Please choose a letter: `, (enteredLetter) => {
//       player1.guessLetter(enteredLetter, game);
//       console.log(game.guessedLetters);
//       readline.question(`Please choose a letter: `, (enteredLetter) => {
//       player1.guessLetter(enteredLetter, game);
//       console.log(game.guessedLetters);
//       readline.question(`Please choose a letter: `, (enteredLetter) => {
//         player1.guessLetter(enteredLetter, game);
//         console.log(game.guessedLetters);
//     readline.close();
//     });
//   });
// });
// });
// });
// });
});

function promptLetter() {
  readline.question(`Please choose a letter: `, (enteredLetter) => {
  player1.guessLetter(enteredLetter, game);
  console.log(game.guessedLetters);
  });
};
