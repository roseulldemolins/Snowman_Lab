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
  console.clear();
  readline.question(`Please choose a letter: `, (enteredLetter) => {
    hiddenWord.word = enteredWord;
    game.hiddenWord = hiddenWord; 
    player1.guessLetter(enteredLetter, game);
    console.log(game.guessedLetters);
  readline.close();
});
});
// rl.question('Please enter the first number : ', (answer1) => {
//     rl.question('Please enter the second number : ', (answer2) => {
//         var result = (+answer1) + (+answer2);
//         console.log(`The sum of above two numbers is ${result}`);
//         rl.close();
//     });
// });
