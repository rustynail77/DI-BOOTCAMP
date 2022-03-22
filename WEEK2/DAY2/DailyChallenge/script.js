// Create a variable called sentence. The value of the variable should be a string that contains the words “not” and “bad”. For example, “The movie is not that bad, I like it”.
let sentence = "It is not that bad to be rich and healthy.";
let sentenceArray = sentence.split(" ");

// Create a variable called wordNot where it’s value is the first appearance of the substring “not” (from the sentence variable).
let wordNot = sentenceArray.indexOf("not");
console.log("not = " + wordNot);
// Create a variable called wordBad where it’s value is the first appearance of the substring “bad” (from the sentence variable).
let wordBad = sentenceArray.indexOf("bad");
console.log("bad = " + wordBad);
// If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result.
// For example, the result here should be : “The movie is good, I like it”
// If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
if (wordBad > wordNot && wordBad > -1 && wordNot > -1) {
    sentenceArray.splice(wordNot, wordBad-wordNot);
    sentenceArray.splice(wordNot, 1, "good");
    sentence = sentenceArray.join(" ")
}
console.log(sentence);