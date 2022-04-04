// Exercise 1 : Find The Sum
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
let shortFunc = (x, y) => x + y;
console.log(shortFunc(3,4));

// Exercise 2 : Kg And Grams
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)
// First, use function declaration and invoke it.
function kToG1 (k) {return k*1000}
console.log(kToG1(1.2));
// Then, use function expression and invoke it.
let kToG2 = function (k) {return k*1000};
console.log(kToG2(1.2));
// Write in a one line comment, the difference between function declaration and function expression.
// THE FUNCTION EXPRESSION CAN BE ANONYMOUS: THE FUNCTION HAS NO NAME
// Finally, use a one line arrow function and invoke it.
let kToG3 = k => k*1000;
console.log(kToG3(1.2));

// Exercise 3 : Fortune Teller
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
(function(numKids, partName, geoLoc, jobTitle){
    let sentence = document.createElement('h5');
    sentence.innerText = `You will be a ${jobTitle} in ${geoLoc}, and married to ${partName} with ${numKids} kids.`;
    document.getElementsByTagName('body')[0].appendChild(sentence);
})(2, "Tirza", "Florida", "Transponster");


// Exercise 4 : Welcome
// John has just signed in to your website and you want to welcome him.
// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(function(userName, imgSrc){
    let myDiv = document.createElement("div");
    let myUserName = document.createTextNode(userName);
    let myUserImg = document.createElement("img");
    myUserImg.src = imgSrc;
    myUserImg.style="width:100px";
    myDiv.appendChild(myUserName);
    myDiv.appendChild(myUserImg);
    let navb = document.getElementsByTagName('nav')[0];
    navb.appendChild(myDiv);
    navb.className="navbar navbar-light bg-light";
})("John Voight", "./IMG-20190915-WA0002.jpg");

// Exercise 5 : Juice Bar
// You will use nested functions, to open a new juice bar.
// Part I: The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
function makeJuice (bevSize) {
    // In the makeJuice function, create an empty array named ingredients.
    let ingredients = [];
    // The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence 
    // like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".
    
    function addIngredients(...args) {
        // The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.
        args.forEach(fruit=>ingredients.push(fruit));
    }
    
    function displayJuice(ingredients) {
        // Part II:
        // Create a new inner function named displayJuice that displays on the DOM a sentence like 
        // The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.
        let myFruit = '';
        ingredients.forEach((element,index)=>{
            let sign = index==ingredients.length-1 ? ".":",";
            myFruit += ` ${element}${sign}`;
        })
        let addToDOM = `The client wants a ${bevSize} juice, containing${myFruit}`;
        let newEle = document.createTextNode(addToDOM);
        document.getElementsByTagName('body')[0].appendChild(newEle);
    }
    // Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
    // The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. 
    // Finally, invoke the makeJuice function in the global scope.
    addIngredients("banana", "apple", "pear", "pineapple", "orange", "peach");
    displayJuice(ingredients);
}
makeJuice("small");