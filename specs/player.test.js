const Game = require('../game');
const Player = require('../player');
const HiddenWord = require('../hiddenword');

describe('Player', () => {

  let game;
  let player1;
  let hiddenWord;

  beforeEach( () => {
    hiddenWord = new HiddenWord('digital');
    player1 = new Player('Matthew');
    game = new Game(player1, hiddenWord);
  });

test('Has a name', function(){
  expect(player1.name).toBe('Matthew')
});

test('Has a number of lives', function(){
  expect(player1.numLives).toBe(6)
});

});
