// In the JS file, create a function called playTheGame() that takes no parameter.
function getUserInput() {
    // If his answer is true, follow these steps:
    // Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). 
    let input = Number(prompt("Gimme a number between 0 and 10> "));
    // You then have to check the validity of the user’s number :
    // If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
    if (isNaN(input)) {
        alert("I asked for a number! I don't know what YOU entered.");
        getUserInput();
    }
    // If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
    if (input < 0 || input > 10) {
        alert("I asked for a number between 0 and 10! What's wrong with you?");
        getUserInput();
    }
    return input;
}


function playTheGame() {
    // In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).
    let answer = confirm("Are you sure you want to play the game?");
    if (!answer) {
        // If the answer is false, alert “No problem, Goodbye”.
        alert("No problem. See ya later!");
        return;
    }
    let input = getUserInput();
    if (input) {
        // Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 
        // (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.
        let chances = 1;
        let computerNumber = Math.floor(Math.random() * 10);
        test(input, computerNumber, chances);
    } else {
        return;
    }
}


// Outside of the playTheGame() function, create a new function named test(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber
function test(userNumber,computerNumber, chances) {
    console.log(`user: ${userNumber} / computer: ${computerNumber} / chances: ${chances}`);
    // If userNumber is equal to computerNumber, alert “WINNER” and stop the game.
    if (userNumber === computerNumber) {
        alert("YOU WIN, BUDDY! I can't believe you beat me...!");
        return;
    // If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” 
    // (Hint: use the built-in prompt() function to ask the user for a new number).
    } else if (userNumber > computerNumber) {
        alert("Try something smaller...");
    // If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).
    } else if (userNumber < computerNumber){
        alert("Try something larger...");
    }
    // If the user guessed more than 3 times, alert “out of chances” and exit the function.
    if (chances < 3) {
        userNumber = getUserInput();
        chances++;
        test(userNumber, computerNumber, chances);
    } else {
        alert("Sorry, out of chances...");
        return;
    }
}

// Bonus
// In the First Part, instead of stopping the process if the user didn’t enter a valid number. Continue asking for a number until the user enters a valid number.