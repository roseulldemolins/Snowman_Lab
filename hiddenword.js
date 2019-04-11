class HiddenWord{

  constructor (word) {
    this.word = word;
  };

  checkLetter(letter) {
    const checkGuess = this.word.split('').some(character => {
      return character === letter;
    });
    if (checkGuess === true) {
      console.log("You guessed right");
    } else {
      console.log("You guessed wrong");
    };
    return checkGuess;
  };

  display(game) {
    return this.word.split('').map(character => {
      if (game.guessedLetters.includes(character)) {
        return character;
      } else {
        return character = '*';
      };
    }).toString().replace(/,/g,'');
  };

};

module.exports = HiddenWord;
