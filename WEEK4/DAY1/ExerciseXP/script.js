// Exercise 1 : Scope
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file.
// // #1
// function q1() {
//     var a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(a);
// }
// RESULT: 3

// // #2
// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }
// RESULT: 5


// //#3
// function q3() {
//     window.a = "hello";
// }

// function q32() {
//     alert(a);
// }
// RESULT: "hello"

// //#4
// var a = 1;
// function q4() {
//     var a = "test";
//     alert(a);
// }
// RESULT: test

// //#5
// var a = 2;
// if (true) {
//     var a = 5;
//     alert(a);
// }
// alert(a);
// RESULT: 5 5

// Exercise 2 : Ternary Operator
// Using the code below:

// function winBattle(){
//     return true;
// }
const winBattle = () => true;
let experiencePoints = winBattle ? 10 : 1;
console.log(experiencePoints);
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.


// Exercise 3 : Is It A String ?
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output
const isString = (value) => typeof(value) === 'string' ? true : false;
// CAN ALSO BE WRITTEN THIS WAY:
// const isString = (value) => typeof(value) === 'string';


// Exercise 4 : Colors
// Using this array :
let colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.
colors.forEach((color,index)=>console.log(`${index+1}# choice is ${color}`));
console.log(colors.includes("Violet") ? "Yeah" : "No...");


// Exercise 5 : Colors #2
// Using these arrays :
let color = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
let ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.
color.forEach((col,i) => {
    let ordi = i > 2 ? ordinal[0] : (i == 0 ? ordinal[1] : (i == 1 ? ordinal[2] : ordinal[3]));
    console.log(`${i+1}${ordi} choice is ${col}`);
});

// Exercise 6 : Bank Details
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):
// Create a global variable called bankAmount which value is the amount of money currently in your account.
let bankAmount = 0;
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
const myVAT = 17;
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : let details = ["+200", "-100", "+146", "+167", "-2900"]
let transactions = ["+200", "-100", "+146", "+167", "-2900"];
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
transactions.forEach((transaction)=>bankAmount += Number(transaction) + Number(transaction) * myVAT/100);
// Display your current bankAccount standing at the end of the month.
console.log(bankAmount);