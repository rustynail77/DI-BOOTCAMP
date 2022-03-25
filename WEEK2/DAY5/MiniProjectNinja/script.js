// Prompt player 1 for a word. The word must have a minimum of 8 letters. Present the word in the console with stars (********).
// At this point continuously prompt player 2 for a letter.
// If the letter is in the word chosen by player 1, display the word in stars again but with the correct letter (*****t**).
// If the letter appears in the word multiple times, make sure it is seen in all the correct places when showing the stars with the correct guesses (***t**t*).
// If player 2 guesses incorrectly 10 times display a message in the console saying YOU LOSE.
// Show a list of all the guesses after each turn. In your code prevent player 2 from guessing the same letter twice.
// If player 1 wins, display a message that says CONGRATS YOU WIN.
function theWord() {
    let input = "";
    do {
        input = prompt('Player 1 - Please enter a word (8 letters minimum)> ');
    }
    while (input.length < 8);
    return input;
}

function getLetter(tryArray) {
    let letter = "";
    do {
        letter = prompt('Player 2 - Please enter a letter> ');
    }
    while (letter.length != 1 || tryArray.includes(letter));
    return letter;
}

function replaceLetter(guess, index, replacement) {
    return guess.substr(0, index) + replacement + guess.substr(index + replacement.length);
}

let word = theWord().toLowerCase();
let guess = "*".repeat(word.length);
let tryArray = [];
console.log(guess);
let tries = 1;
while (guess!=word && tries < 11) {
    let letter = getLetter(tryArray).toLowerCase();
    if (word.includes(letter)) {
        for (let i=0; i < word.length; i++) {
            if (word[i] === letter) {
                guess = replaceLetter(guess, i, letter);
            }
        }
    };
    if (guess == word) {
        console.log(`You got it! The word was ${word}!`);
        break;
    } else {
        tryArray.push(letter);
        console.log(guess);
        if (tries < 10) {
            console.log(`You already tried ${tryArray}. You have ${10-tries} more tries.`);
        } else {
            console.log("No more tries for you, buddy! YOU LOST!");
        }
        tries++;
    }
    
}
