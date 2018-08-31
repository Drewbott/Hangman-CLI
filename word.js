var Letter = require("./letter.js");


function Word(randomWord) {
    this.letterArray = [];
    this.word = function() {
      for(var i = 0; i < randomWord.length; i++){ 
        var newLetter = new Letter(randomWord.charAt(i))
        this.letterArray.push(newLetter.letterGuesser())
      }
      console.log(this.letterArray)
    }
    this.checkInput = function(letter) {
      for (var t = 0; t < this.letterArray.length; t++){
        this.guessChecker.push(letter.letterGuesser())
      }

    }

};



module.exports = Word;