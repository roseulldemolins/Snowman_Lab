class Player{

  constructor (name, numLives = 6) {
    this.name = name;
    this.numLives = numLives;
  };

  guessLetter(letter, game) {
    game.addLetter(letter)
  };
}

module.exports = Player;
