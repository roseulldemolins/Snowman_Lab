const Game = require('../game');
const Player = require('../player');
const HiddenWord = require('../hiddenword');

describe('Hiddenword', () => {

  let game;
  let player1;
  let hiddenWord;

  beforeEach( () => {
    hiddenWord = new HiddenWord('digital');
    player1 = new Player('Matthew');
    game = new Game(player1, hiddenWord);
    game.guessedLetters = [];
  });

  test('Has a word', function(){
    expect(hiddenWord.word).toBe('digital')
  });

  test('Returns true if letter has been guessed correctly', function(){
    expect(hiddenWord.checkLetter('a')).toBe(true)
  });

  test('Displays word as asterisks if letter has not been guessed', function(){
    player1.guessLetter('a', game);
    player1.guessLetter('g', game);
    player1.guessLetter('x', game);
    expect(hiddenWord.display()).toBe('**g**a*')
  });

});


// player1.guessLetter('a', game)
