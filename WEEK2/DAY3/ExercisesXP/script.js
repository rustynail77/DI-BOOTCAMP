let people = ["Greg", "Mary", "Devon", "James"]

// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
people.shift();

// Write code to replace “James” to “Jason”.
people.splice(2, 1, 'Jason');

// Write code to add your name to the end of the people array.
people.push('Liron');

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this let people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
let newPeople = people.slice(1,3);
console.log(newPeople);

// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(people.indexOf("Foo"));
//it returns -1 because the item isn't present at the array

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?
let last = people[people.length-1];
console.log(`last = ${last}`);

// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (let person in people) {
    console.log(people[person]);
}

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.
for (let person in people) {
    console.log(people[person]);
    if (people[person] == "Jason") {break;}
}

// Exercise 2 : Your Favorite Colors
// Create an array called colors where the value is a list of your five favorite colors.
let colors = ["red", "green", "yellow", "blue", "gray"];

// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i=1; i<=5; i++) {
    console.log(`My #${i} choice is ${colors[i-1]}`);
}

// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus
let suffix = ["st","nd","rd","th","th"];
for (let i=0; i<=4; i++) {
    console.log(`My ${i+1}${suffix[i]} choice is ${colors[i]}`);
}

// Exercise 3 : Repeat The Question
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
let input = parseInt(prompt("Enter a number> "));
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
while (isNaN(input) || input < 10) {
    input = parseInt(prompt("Enter a number> "));
}

// Exercise 4 : Building Management
let building = {
    numberOfFloors : 4,
    numberOfAptByFloor : {
        firstFloor : 3,
        secondFloor : 4,
        thirdFloor : 9,
        fourthFloor : 2,
    },
    nameOfTenants : ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan :  [4, 1000],
        david : [1, 500],
    },
}
// Console.log the number of floors in the building.
console.log(building["numberOfFloors"]);

// Console.log how many apartments are on the floors 1 and 3.
console.log(`There are ${building["numberOfAptByFloor"]["firstFloor"]} apartments on 1st floor and ${building["numberOfAptByFloor"]["thirdFloor"]} apartments on the 3rd floor.`);

// Console.log the name of the second tenant and the number of rooms he has in his apartment.
console.log(`${building["nameOfTenants"][1]} has ${building["numberOfRoomsAndRent"][building["nameOfTenants"][1].toLowerCase()][0]} rooms in the apartment.`);

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
if (building["numberOfRoomsAndRent"]["sarah"][1] + building["numberOfRoomsAndRent"]["david"][1] > building["numberOfRoomsAndRent"]["dan"][1]) {
    building["numberOfRoomsAndRent"]["dan"][1] = 1200;   
}
// Exercise 5 : Family
// Create an object called family with a few key value pairs.
let family = {
    famName : "Schnitzer",
    numOfMembers : 5,
    cityOfResidence : "Dimona"
}
// Using a for loop, console.log the keys of the object.
for (let key in family) {
    console.log(key);
}

// Using a for loop, console.log the values of the object.
for (let key in family) {
    console.log(family[key]);
}

// Exercise 6
let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”
let sentence ="";
for (let key in details) {
    sentence += `${key} ${details[key]} `;
}
console.log(sentence);

// Exercise 7 : Secret Group
let names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”
names.sort();
let secret="";
for (let member in names) {
    secret += names[member][0];
}
console.log(secret);