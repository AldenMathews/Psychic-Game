var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];

var guessedLetters = [];
var mysteryLetter = null;
var guessesRemaining = 5;

var wins = 0;
var losses = 0;

var updateGuessesRemaining = function() {
    document.querySelector("#guesses-remaining").innerHTML = guessesRemaining;
};

var updateGuessesMade = function() {
    document.querySelector("#guesses-made").innerHTML = guessedLetters.join(", ");
};

var updateMysteryLetter = function() {
    mysteryLetter = letters[Math.floor(Math.random() * letters.length)];
};

document.onkeydown = function(event) {
    var letter = guessedLetters.textContent = event.key;
    guessesRemaining--;
    guessedLetters.push(letter);

    updateGuessesRemaining();
    updateGuessesMade();

    if (guessedLetters === mysteryLetter) {
        wins++;
        document.querySelector("#wins").innerHTML = wins;
    }

    if (guessesRemaining === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
    }
};