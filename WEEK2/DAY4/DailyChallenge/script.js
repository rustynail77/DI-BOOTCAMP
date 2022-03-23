// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
function getLongest (array) {
    let leng = 0;
    for (word of array) {
        if (word.length > leng) leng = word.length;
    }
    return leng;
}

function printWord(word, maxLen) {
    let addSpace = maxLen - word.length;
    console.log(`* ${word}${" ".repeat(addSpace)} *`);
}

let input = prompt("enter a few words separated by commas> ");
let words = input.split(",");
let longest = getLongest(words);

console.log("*".repeat(longest+4));
for (word of words) {
    printWord(word, longest);
}
console.log("*".repeat(longest+4));
