// Exercise 1 : Age Difference
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY
let birthYear1 = 1977;
let birthYear2 = 1960;
let midDate;
if (birthYear2 > birthYear1) {
    midDate = birthYear1 + (birthYear2-birthYear1)*2;
    } else {
    midDate = birthYear2 + (birthYear1-birthYear2)*2;
    }
console.log(midDate);

// Exercise 2 : Zip Codes
// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
const zip = prompt("What is your zip code? ");
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length
let zipLength = zip.length;
let checker = true;
for (let i = 0; i <= zipLength; i++) {
    if (zip.charCodeAt(i) < 48 || zip.charCodeAt(i) > 57) {
        checker = false;
    }
}
if (zip.length === 5 && checker === true) {
    console.log("success");
} else {
    console.log("error");
}

// Exercise 3 : Secret Word
// Hint : Use Regular Expressions
// Prompt the user for a word and save it to a variable.
const input = prompt("Enter word> ");

// Delete all the vowels of the word and console.log the result.
const regex = /[aeiou]/gi;
let croppedInput = input.replace(regex, ''); 
console.log(croppedInput);

// Bonus: Replace the vowels with another character and console.log the result
let newInput = input;
// a = 1
newInput = newInput.replace('a','1');
// e = 2
newInput = newInput.replace('e','2');
// i = 3
newInput = newInput.replace('i','3');
// o = 4
newInput = newInput.replace('o','4');
// u = 5
newInput = newInput.replace('u','5');
console.log(newInput);