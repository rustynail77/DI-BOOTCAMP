// Create a function that:

// takes in two strings as two parameters
// and returns a boolean that indicates whether or not the first string is an anagram of the second string.

let returnArrangedArr = (phrase) => phrase.replace(/ /g,"").toLowerCase().split("").sort();

function comparePhrases(ph1,ph2){
    let checker = true;
    let phrase1 = returnArrangedArr(ph1);
    let phrase2 = returnArrangedArr(ph2);
    if (phrase1.length==phrase2.length) {
        for (i in phrase1) {
            if (phrase1[i]==phrase2[i]) {
                continue;
            } else {
                checker = false;
                break;
            }
        }
    } else {checker=false};
    checker ? console.log("It's an anagram") : console.log("It's NOT an anagram");
}
comparePhrases("addhe lo dff aASd   g  ", "hfe lo dff aASd add");