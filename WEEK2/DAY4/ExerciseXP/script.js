// Exercise 1 : Information
// Part I : function with no parameters
// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.
function infoAboutMe() {
    console.log("My name is Liron, I'm 45 and I like, coding, cooking, playing basketball and mostly eating :)");
}
infoAboutMe();

// Part II : function with three parameters
// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")
function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log(`Your name is ${personName}, your age is ${personAge}, your favorite color is ${personFavoriteColor}`);
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// Exercise 2 : Tips
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
// Create a function named calculateTip() that takes no parameter.

function tipCalc() {
    // Inside the function, ask John for the amount of the bill.
    const input = Number(prompt("What's the bill amount? "));
    // Here are the rules
    // If the bill is less than $50, tip 20%.
    // If the bill is between $50 and $200, tip 15%.
    // If the bill is more than $200, tip 10%.
    let tip = 0;
    if (input < 50) {
        tip = input*0.2;
    } else if (input < 200) {
        tip = input*0.15;
    } else {
        tip = input*0.1;
    }
    // Console.log the tip amount and the final bill (bill + tip).
    console.log(`The tip should be ${tip} and the whole amount is ${input+tip}.`);

}
// Call the calculateTip() function.
tipCalc();

// Exercise 3 : Find The Numbers Divisible By 23
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
function isDivisible(divisor) {
    let sum = 0;
    for (i=0; i<=500; i++) {
        if (i % divisor == 0) {
            // Console.log all the numbers divisible by 23.
            // console.log(i); ----> I commented out just for testing purposes
            sum += i;
        }
    }
    // At the end, console.log the sum of all numbers that are divisible by 23.
    console.log(`Sum is: ${sum}`);
}
// Outcome : 0 23 46 69 92 115 138 161 184 207 230 253 276 299 322 345 368
// 391 414 437 460 483
// Sum : 5313
// Bonus: Add a parameter divisor to the function.
// isDivisible(divisor)
// Example:
// isDivisible(3) : Console.log all the numbers divisible by 3, and their sum
// isDivisible(45) : Console.log all the numbers divisible by 45, and their sum
isDivisible(23);

// Exercise 4 : Shopping List
// Add the stock and prices objects to your js file.
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  
let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. It means that you have 1 banana, 1 orange and 1 apple in your cart.
let shoppingList = ["banana", "orange", "apple"];

// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock.
// If the item is in stock find out the price in the prices object.
function myBill() {
    let sum = 0;
    for (let item of shoppingList) {
        if (stock[item]>=1) {
            // Bonus: If the item is in stock, decrease the item’s stock by 1
            stock[item] -= 1;
            // console.log(`${item} is now ${stock[item]}`);
            sum += prices[item];
        }
    }
    return sum;
}
// Call the myBill() function.
console.log(`The total is ${myBill()}`);

// Exercise 5 : What’s In My Wallet ?
// Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// an item price
// and an array representing the amount of change in your pocket.
function enoughChange(itemPrice, amountOfChange) {
    // Change will always be represented in the following order: quarters, dimes, nickels, pennies.
    // A quarters is 0.25, A dimes is 0.10, A nickel is 0.05, A penny is 0.01
    const changeVals = [0.25, 0.1, 0.05, 0.01];
    let changeSum = 0;
    for (i = 0; i<changeVals.length; i++) {
        changeSum += amountOfChange[i] * changeVals[i];
    }
    console.log(`Change sum is: ${changeSum}`);
    // In the function, determine whether or not you can afford the item.
    // If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
    // If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
    return (itemPrice < changeSum);
}
// The function should return true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50 which is bigger than 4.25 (the total amount due)
console.log(enoughChange(4.25, [25, 20, 5, 0]));

// changeEnough(14.11, [2,100,0,0]) => returns false
console.log(enoughChange(14.11, [2,100,0,0]));

// changeEnough(0.75, [0,0,20,5]) => returns true
console.log(enoughChange(0.75, [0,0,20,5]));


// Exercise 6 : Vacations Costs
// Let’s create functions that calculate your vacation’s costs:
// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
function hotelCost(numOfNights) {
    return numOfNights*140;
}

// Define a function called planeRideCost(). It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again. 
// The function should return a different price depending on the location.
// “London”: 183$ // “Paris” : 220$ // All other destination : 300$
function planeRideCost(destination) {
    let costs = 0;
    switch (destination.toLowerCase()) {
        case "london":
            costs = 183;
            break;
        case "paris":
            costs = 220;
            break;
        default:
            costs = 300;
    }
    return costs;
}

// Define a function called rentalCarCost(). It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday. If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
function rentalCarCost(carRent) {
    return (carRent > 10) ? carRent*40*0.95 : carRent*40;
}

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().
function totalVacationCost() {
    let carRent;
    do {
        carRent = Number(prompt("Please enter a number of days to rent a car> "));
    }
    while (isNaN(carRent) || carRent < 1);
    let carCost = rentalCarCost(carRent);
    
    let destination = "";
    do {
        destination = prompt("What's your destination? ");
    }
    while (destination == "");
    let flightCost = planeRideCost(destination);
    
    let numOfNights = 0;
    do {
        numOfNights = Number(prompt("Please enter a number of nights in the hotel> "));
    }
    while (isNaN(numOfNights) || numOfNights < 1);
    let hotelCosts = hotelCost(numOfNights);
    
    return carCost + hotelCosts + flightCost;
}
// Call the function totalVacationCost()
console.log(`Your total vacation costs will be $${totalVacationCost()}`);
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. 
// You need to change the 3 first functions, accordingly.