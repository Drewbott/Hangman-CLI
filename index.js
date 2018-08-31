var Word = require("./word.js");
var inquirer = require("inquirer");



var wordArray = [
    "wolverine",
    "daredevil",
    "hulk",
    "thor",
    "ironman",
    "hawkeye",
    "spiderman",
    "cyclops",
    "magneto",
    "gambit",
    "rogue",
    "storm",
    "colossus",
    "redskull",
    "deadpool",
    "thanos",
    "loki",
    "juggernaut",
    "gamora",
    "bullseye",
    "elektra",
    "starlord",
    "groot",
    "antman",
    "wasp",
    "iceman",
    "vision",
    ];

var randomWord = wordArray[Math.floor(Math.random() * wordArray.length)];
var maxLives = 8;   

console.log(randomWord)

function startGame() {
    var generate = new Word(randomWord)
    generate.word()
    lives=maxLives
}
function wrongGuess() {
    lives--;
}

startGame();

inquirer.prompt ([
    {
        type: "input",
        name: "letter",
        message: "Pick a Letter to guess a Marvel character"
    }
]).then(function(guess) {
    if (guess.letter = randomWord) {
        guess.letter.push()
        console.log ("Good Guess")
    }
    else {
        wrongGuess()
        console.log("Lives Remaining: " + lives)
    }
});

    
