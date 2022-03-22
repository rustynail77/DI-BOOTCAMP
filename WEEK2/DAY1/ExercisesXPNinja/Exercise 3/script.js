const input = prompt("Gimme a sentence using the word Nemo> ");
let inpArray = input.split(" ");
let nemoLocation = inpArray.indexOf("Nemo");
if (nemoLocation > -1) {
    console.log(`I found Nemo at ${nemoLocation}.`);
} else {
    console.log("I can't find Nemo");
}

