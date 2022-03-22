// Prompt the user for a number and save it to a variable.
const input = prompt("Gimme a number, pronto!> ");

// Check whether the variable is even or odd.
// If it is even, display: “x is an even number”. Where x is the actual number the user chose.
// If it is odd, display: “x is an odd number”. Where x is the actual number the user chose.
if (input % 2 == 0) {
    console.log(`${input} is an even number`);
} else {
    console.log(`${input} is an odd number`);
}