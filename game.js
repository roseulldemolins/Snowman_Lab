class Game{

  constructor (player, hiddenWord) {
    this.player = player;
    this.hiddenWord = hiddenWord;
    this.guessedLetters = [];
  };
  addLetter(letter){
    this.guessedLetters.push(letter)
    this.hiddenWord.checkLetter(letter)
  };
}

module.exports = Game;
