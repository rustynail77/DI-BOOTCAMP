// // Exercise

let userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

// 1. Add the lastname Smith to the object
userCart["lastname"] = "Smith";

// 2. Change the price of the pear, so it will contain the Taxes. 17%
userCart["prices"]["pear"] *= 1.17;

// 3. Ask the user for the fruit he wants between Apple, Banana and Pear.
// Make sure that your code accept all type of strings,
// for example "Banana" or "banana" or "BaNaNA"
const input = prompt("Which type of fruit would you like: Apple, Banana or Pear? ").toLowerCase();

// 4. Console.log the price for the specific fruit the user wants
console.log(`The price for ${input} is ${userCart["prices"][input]}`);












