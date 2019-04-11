class Game{

  constructor (player, hiddenWord) {
    this.player = player;
    this.hiddenWord = hiddenWord;
    this.guessedLetters = [];
  };
  addLetter(letter){
    this.guessedLetters.push(letter);
    this.updateLives(letter);
  };

  updateLives(letter) {
    this.hiddenWord.checkLetter(letter);
    if (this.hiddenWord.checkLetter(letter) === false) { // how can we avoid calling this twice?
      this.player.numLives -= 1;
    }
  };

}

module.exports = Game;
