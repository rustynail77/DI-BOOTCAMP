// Using this object :

let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}
// Hint: To do this daily challenge, take a look at today’s lesson Pass By Value & Pass By Reference
// Create an arrow function named displayGroceries, that console.logs the 3 fruits from the groceries object. Use the forEach method.

let displayGroceries = (fruits) => fruits.forEach((ingr)=>console.log(ingr));
displayGroceries(groceries["fruits"]);

// Create another arrow function named cloneGroceries.
// In the function, create a variable named user that is a copy of the client variable. (Tip : make the user variable equal to the client variable)
let cloneGroceries = () => {
    let user = client;
    // Change the client variable to “Betty”. Will we also see this modification in the user variable ? Why ?
    // NO. USER AND CLIENT ARE PRIMITIVE VARIABLES AND THUS IMMUTABLE: ONE WILL NOT CHANGE WHEN THE OTHER ONE CHANGES.
    client = 'Betty';

    // In the function, create a variable named shopping that is a copy of the groceries object. (Tip : make the shopping variable equal to the groceries variable)
    let shopping = groceries;
    // Change the value of the totalPrice key to 35$. Will we also see this modification in the shopping object ? Why ?
    // YES. WITH OBJECTS, VALUES ARE ACTUALLY POINTERS POINTING TO THE OBJECTS. WHEN WE CHANGE THE ACTUAL VALUE STORED IN THE OBJECT, THE POINTER OF BOTH COPIES
    // REMAINS POINTING TO THE SAME OBJECT (WITH A NOW CHANGED VALUE).
    groceries["totalPrice"] = "35$";

    // Change the value of the payed key to false. Will we also see this modification in the shopping object ? Why ?
    // YES. IT'S THE SAME AS WITH THE PREVIOUS ANSWER.
    groceries["other"]["payed"] = false;
};
// Invoke the cloneGroceries function.
cloneGroceries();