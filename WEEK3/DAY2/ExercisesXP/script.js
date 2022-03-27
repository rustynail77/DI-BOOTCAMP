// Exercise 1 : Change The Article
// Using a DOM property, retrieve the h1 and console.log it.
console.log(document.getElementsByTagName('h1')[0].innerText);

// Using DOM methods, remove the last paragraph in the <article> tag.
document.getElementsByTagName('article')[0].lastElementChild.remove();

// Add an event listener which will change the background color of the h2 to red, when it’s clicked on.
let myH2 = document.getElementsByTagName('h2')[0];
myH2.addEventListener('click', () => myH2.style.backgroundColor = "red");

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let myH3 = document.getElementsByTagName('h3')[0];
myH3.addEventListener('click', () => myH3.style.display = 'none');

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
let myArticle = document.getElementsByTagName('article')[0];
let myButt = document.createElement('button');
myButt.innerText = "Don't touch my Butt";
myButt.onclick = () => myArticle.style.fontWeight = "bold";
myArticle.appendChild(myButt);

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
let myH1 = document.getElementsByTagName('h1')[0];
myH1.addEventListener('mouseenter', function () {
    let newFontSize = Math.floor(Math.random() * 100)+"px";
    myH1.style.fontSize = newFontSize;
});
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
let myP2 = document.getElementsByTagName('p')[1];
myP2.addEventListener('mouseenter', () => myP2.classList.add('fade-out-parag'));


// Exercise 2 : Work With Forms - Retrieve the form and console.log it.
function handleSubmit(event) {
    event.preventDefault();
    // Retrieve the inputs by their id and console.log them.
    console.log(`by ID -> ${document.getElementById('fname').value} ${document.getElementById('lname').value}`);
    // Retrieve the inputs by their name attribute and console.log them.
    console.log(`by NAME -> ${document.getElementsByName('fname')[0].value} ${document.getElementsByName('lname')[0].value}`);

    let myUserAnswer = document.createElement('ul');
    myUserAnswer.className = 'userAnswer';
    document.getElementsByTagName('form')[0].appendChild(myUserAnswer);

    // When the user submits the form (ie. submit event listener)
    // get the values of the input tags, make sure that they are not empty,
    // create an li per input value,
    // then append them to a the <ul class="usersAnswer"></ul>, below the form.
    const data = new FormData(event.target);
    for (let item of data.entries()) {
        if (item[1]=="") {
            alert(`You're missing a value in ${item[0]} field`);
        } else {
            let myLi = document.createElement('li');
            myLi.innerText = item[1];
            myUserAnswer.appendChild(myLi);
        }
    }
}

const form = document.querySelector('#form1');
form.addEventListener('submit', handleSubmit);


// Exercise 3 : Transform The Sentence
// Create a global variable named allBoldItems.
// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
let myLastP = document.body.children[3];
function getBold_items() {
    return myLastP.getElementsByTagName('strong');
}

// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight(elements, color) {
    for (let element of elements) {
        element.style.color = color;
    }
}
let allBoldItems = getBold_items();
highlight(allBoldItems, "blue");

// Create a function called return_normal() that changes the color of all the bold text back to black.
// WHY CREATE A NEW FUNCTION WHEN I CAN CALL THE PREVIOUS ONE AGAIN?
highlight(allBoldItems, "black");

// Call the function highlight() onmouseover (ie. when the mouse pointer is moved onto the paragraph),
// and the function return_normal() onmouseout (ie. when the mouse pointer is moved out of the paragraph).
myLastP.addEventListener('mouseenter',() => highlight(allBoldItems, "blue"));
myLastP.addEventListener('mouseout',() => highlight(allBoldItems, "black"));

// Exercice 4 : Volume Of A Sphere
// Write a JavaScript program to calculate the volume of a sphere.
function getSphereVolume (event) {
    event.preventDefault();
    let data = new FormData(event.target);
    let r = data.get('radius');
    radius = Math.abs(r);
    volume = (4/3) * Math.PI * Math.pow(radius, 3);
    volume = volume.toFixed(1);
    document.getElementById('volume').value = volume;
}
const myForm = document.querySelector('#MyForm');
myForm.addEventListener('submit', getSphereVolume);


// Bonus Exercise 5 : Event Listeners
// Add as many events listeners as possible to one element on your webpage. 
// Each listener should do a different thing, for instance- change position x, change position y, change color, change the font size… and more.
myLastP.addEventListener('click', ()=> document.body.style.backgroundColor = "lightgreen");
myLastP.addEventListener('dblclick', ()=> document.body.style.backgroundColor = "white");
