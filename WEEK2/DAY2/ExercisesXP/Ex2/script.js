// Create a variable called newDog where it’s value is “Chihuahua”.
let newDog = "Chihuahua";

// Check and display how many letters are in newDog.
console.log(`${newDog} has ${newDog.length} letters.`);

// Display the newDog variable in uppercase and then in lowercase (no need to create new variables, just console.log twice).
console.log(`${newDog.toUpperCase()}`);
console.log(`${newDog.toLowerCase()}`);

// Check if the variable newDog is equal to “Chihuahua”
// if it does, display ‘I love Chihuahuas, it’s my favorite dog breed’
// else, console.log ‘I dont care, I prefer cats’
if (newDog == "Chihuahua") {
    console.log("I love Chihuahuas, it’s my favorite dog breed");
} else {
    console.log("I don't care, I prefer cats");
}