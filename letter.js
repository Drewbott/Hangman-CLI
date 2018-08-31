


function Letter(newLetter) {
    this.character = newLetter;
    this.guessed = false;
    this.letterGuesser = function() {
        if (this.guessed) {
            return (this.character);
        } 
        else {
            return ("_");
        }
    }
    this.guessChecker = function(letter) {
        if (letter === this.character) {
            this.guessed = true;
        
    }
}
};

module.exports = Letter;