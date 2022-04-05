// ## Exercise 1:  create a new array that filters only the positive value
let numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];
let positivesOnly = numbers.filter(number=>number >= 0);
console.log(positivesOnly);

// ## Exercise 2: Suppose you have a list of Star Trek characters,
// and you want to get just the characters that appeared in Star Trek: The Next Generation.
// Use filter() to filter the array of characters below
const characters = [
   { name: 'James T. Kirk', series: ['Star Trek'] },
   { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
   { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
   { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
]; 

let TNG = characters.filter(chara=>chara["series"].includes('Star Trek: The Next Generation'));
console.log(TNG);

// ## Exercise 3 NOT MANDATORY - send me the result by slack
// Use the filter method to create an array without duplicates. The result should be ["blue","red","yellow"]
let colors = ["blue", "red", "red", "blue", "yellow"];


// ## Exercise 1
const students = [
 	{name: 'Rich', score: 33}, 
 	{name: 'Peter', score: 55},
 	{name: 'John', score: 75}
];
// Find the sum of the score of the students using reduce
let sum = students.reduce((summed, nextVal) => summed + nextVal["score"], 0);
console.log(sum);



// # Exercise2
let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];
// 1. Turn an array of voter objects into a count of how many people voted
let arrayOfVoters = voters.filter(element=>element["voted"]);
console.log(arrayOfVoters);
// 2. Do the exercise using reduce only
let voted = voters.reduce((acc, element)=>acc + element['voted'],0);
console.log(voted);
// 3. Then do it by chaining map and reduce
