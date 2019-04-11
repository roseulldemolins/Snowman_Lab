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

  test('Can reduce player\'s lives', function() {
    player1.guessLetter('x', game);
    expect(player1.numLives).toBe(5);
  });

  test('Can determine if a game is lost', function(){
    player1.guessLetter('x', game);
    player1.guessLetter('b', game);
    player1.guessLetter('c', game);
    player1.guessLetter('e', game);
    player1.guessLetter('f', game);
    player1.guessLetter('h', game);
    expect(game.isLost()).toBe(true);
  })

  test('Can determine if a game is won', function(){
    player1.guessLetter('d', game);
    player1.guessLetter('i', game);
    player1.guessLetter('g', game);
    player1.guessLetter('t', game);
    player1.guessLetter('a', game);
    player1.guessLetter('l', game);
    expect(game.isWon(game)).toBe(true);
  })
});
