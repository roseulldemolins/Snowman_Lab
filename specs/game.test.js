const Game = require('../game');
const Player = require('../player');
const HiddenWord = require('../hiddenword');

describe('Game', () => {

  let game;
  let player1;
  let hiddenWord;

  beforeEach( () => {
    hiddenWord = new HiddenWord('digital');
    player1 = new Player('Matthew');
    game = new Game(player1, hiddenWord);
  });

  test('Has a player', function(){
    expect(game.player).toBe(player1)
  });

  test('Has a hidden word', function(){
    expect(game.hiddenWord).toBe(hiddenWord)
  });

  test('Can add letters when guessed', function(){
    player1.guessLetter('a', game);
    expect(game.guessedLetters).toEqual(['a'])
  });

  test('Can add letters when guessed', function(){
    player1.guessLetter('a', game);
    expect(game.guessedLetters).toEqual(['a'])
  });

});
