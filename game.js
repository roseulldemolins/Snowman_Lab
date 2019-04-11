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
    if (this.hiddenWord.checkLetter(letter) === false) { // Nb this calls the actual method!
      this.player.numLives -= 1;
    }
  };

  isLost() {
    if (this.player.numLives === 0) {
      console.log('You lose!');
      return true
    }
  }

  isWon(game) {
    if (this.hiddenWord.display(game) === this.hiddenWord.word) {
      console.log('You win!');
      return true
    }
  }


}

module.exports = Game;
